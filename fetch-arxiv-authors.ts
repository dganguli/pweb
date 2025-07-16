#!/usr/bin/env tsx

import fetch from 'node-fetch';
import { parseString } from 'xml2js';
import { promisify } from 'util';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const parseXML = promisify(parseString);

interface ArxivAuthor {
  name: string[];
}

interface ArxivEntry {
  id: string[];
  title: string[];
  author: ArxivAuthor[];
  summary: string[];
  published: string[];
}

interface ArxivFeed {
  feed: {
    entry: ArxivEntry[];
  };
}

interface PaperResult {
  arxivId: string;
  title: string;
  authors: string[];
  published: string;
  url: string;
}

/**
 * Extract arXiv ID from URL or return the ID if already in correct format
 */
function extractArxivId(input: string): string {
  // If it's already an arXiv ID format (YYMM.NNNNN), return as is
  if (/^\d{4}\.\d{4,5}$/.test(input)) {
    return input;
  }
  
  // Extract from URL like https://arxiv.org/abs/2302.07459
  const match = input.match(/\/abs\/(\d{4}\.\d{4,5})/);
  if (match) {
    return match[1];
  }
  
  throw new Error(`Invalid arXiv URL or ID: ${input}`);
}

/**
 * Fetch paper metadata from arXiv API
 */
async function fetchArxivMetadata(arxivId: string): Promise<PaperResult> {
  const apiUrl = `http://export.arxiv.org/api/query?id_list=${arxivId}`;
  
  try {
    console.log(`Fetching metadata for ${arxivId}...`);
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    const parsed = await parseXML(xmlText) as ArxivFeed;
    
    if (!parsed.feed || !parsed.feed.entry || parsed.feed.entry.length === 0) {
      throw new Error(`No entry found for arXiv ID: ${arxivId}`);
    }
    
    const entry = parsed.feed.entry[0];
    
    // Extract authors
    const authors = entry.author.map(author => author.name[0]);
    
    // Clean up title (remove newlines and extra spaces)
    const title = entry.title[0].replace(/\s+/g, ' ').trim();
    
    // Extract publication date
    const published = entry.published[0];
    
    return {
      arxivId,
      title,
      authors,
      published,
      url: `https://arxiv.org/abs/${arxivId}`
    };
  } catch (error) {
    console.error(`Error fetching metadata for ${arxivId}:`, error);
    throw error;
  }
}

/**
 * Fetch metadata for multiple papers with rate limiting
 */
async function fetchMultiplePapers(inputs: string[]): Promise<PaperResult[]> {
  const results: PaperResult[] = [];
  const errors: string[] = [];
  
  for (const input of inputs) {
    try {
      const arxivId = extractArxivId(input);
      const result = await fetchArxivMetadata(arxivId);
      results.push(result);
      
      // Rate limiting: wait 1 second between requests to be respectful to arXiv API
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      const errorMsg = `Failed to process ${input}: ${error instanceof Error ? error.message : String(error)}`;
      console.error(errorMsg);
      errors.push(errorMsg);
    }
  }
  
  if (errors.length > 0) {
    console.log('\n=== ERRORS ===');
    errors.forEach(error => console.log(error));
  }
  
  return results;
}

/**
 * Format results for easy copying into researchContent.ts
 */
function formatResults(results: PaperResult[]): void {
  console.log('\n=== AUTHOR INFORMATION ===');
  console.log('// Copy this information into your researchContent.ts file\n');
  
  results.forEach(paper => {
    console.log(`// ${paper.arxivId}: ${paper.title}`);
    console.log(`// Authors: ${paper.authors.join(', ')}`);
    console.log(`// Published: ${paper.published}`);
    console.log(`// URL: ${paper.url}`);
    console.log('// Authors array for TypeScript:');
    console.log(`authors: [${paper.authors.map(author => `"${author}"`).join(', ')}],`);
    console.log('');
  });
  
  console.log('\n=== SUMMARY ===');
  console.log(`Successfully processed ${results.length} papers:`);
  results.forEach(paper => {
    console.log(`- ${paper.arxivId}: ${paper.authors.length} authors`);
  });
  
  console.log('\n=== JSON FORMAT ===');
  console.log('// For programmatic use:');
  console.log(JSON.stringify(results, null, 2));
  
  // Save results to file
  const outputFile = resolve(process.cwd(), 'arxiv-authors-output.json');
  writeFileSync(outputFile, JSON.stringify(results, null, 2));
  console.log(`\n=== OUTPUT SAVED ===`);
  console.log(`Results saved to: ${outputFile}`);
}

/**
 * Main function
 */
async function main() {
  const arxivInputs = [
    'https://arxiv.org/abs/2302.07459',
    'https://arxiv.org/abs/2209.07858',
    'https://arxiv.org/abs/2212.08073',
    'https://arxiv.org/abs/2204.05862',
    'https://arxiv.org/abs/2504.15236',
    'https://arxiv.org/abs/2306.11932',
    'https://arxiv.org/abs/2102.02503',
    'https://arxiv.org/abs/2103.06312',
    'https://arxiv.org/abs/1603.00058',
    'https://arxiv.org/abs/2412.13678'
  ];
  
  console.log('arXiv Author Fetcher');
  console.log('====================');
  console.log(`Processing ${arxivInputs.length} papers...`);
  
  try {
    const results = await fetchMultiplePapers(arxivInputs);
    formatResults(results);
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

// Run the script if called directly (not imported)
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('fetch-arxiv-authors.ts')) {
  main().catch(error => {
    console.error('Unhandled error:', error);
    process.exit(1);
  });
}

export {
  extractArxivId,
  fetchArxivMetadata,
  fetchMultiplePapers,
  formatResults
};