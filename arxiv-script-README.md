# arXiv Author Fetcher

A TypeScript script that fetches author information from arXiv papers using the arXiv API.

## Features

- Extracts arXiv IDs from URLs or accepts direct paper IDs
- Fetches paper metadata from the arXiv API (http://export.arxiv.org/api/query)
- Parses XML responses to extract author names, titles, and publication dates
- Handles errors gracefully with detailed logging
- Rate limits requests to be respectful to the arXiv API (1 second between requests)
- Outputs results in multiple formats for easy integration

## Usage

### Run the script directly:
```bash
npx tsx fetch-arxiv-authors.ts
```

### Output formats:

1. **Console output**: Human-readable format with TypeScript arrays ready to copy into code
2. **JSON file**: Machine-readable format saved to `arxiv-authors-output.json`
3. **Log file**: Complete execution log when redirected (e.g., `npx tsx fetch-arxiv-authors.ts > output.log`)

## Input Format

The script accepts arXiv URLs or paper IDs in these formats:
- `https://arxiv.org/abs/2302.07459`
- `2302.07459`

## Current Papers Processed

The script is pre-configured to process these 10 arXiv papers:
- 2302.07459 - The Capacity for Moral Self-Correction in Large Language Models
- 2209.07858 - Red Teaming Language Models to Reduce Harms
- 2212.08073 - Constitutional AI: Harmlessness from AI Feedback
- 2204.05862 - Training a Helpful and Harmless Assistant with RLHF
- 2504.15236 - Values in the Wild: Discovering and Analyzing Values
- 2306.11932 - Opportunities and Risks of LLMs for Scalable Deliberation
- 2102.02503 - Understanding the Capabilities, Limitations, and Societal Impact
- 2103.06312 - The AI Index 2021 Annual Report
- 1603.00058 - Neural and perceptual signatures of efficient sensory coding
- 2412.13678 - Clio: Privacy-Preserving Insights into Real-World AI Use

## Dependencies

- `tsx` - TypeScript execution environment
- `node-fetch` - HTTP client for Node.js
- `xml2js` - XML parser
- `@types/node`, `@types/xml2js` - TypeScript definitions

## Error Handling

The script includes comprehensive error handling:
- Invalid arXiv URLs/IDs
- Network errors
- XML parsing errors
- Missing paper entries
- Rate limiting to prevent API abuse

## API Details

Uses the arXiv API at `http://export.arxiv.org/api/query` which returns data in Atom XML format. The script parses this to extract:
- Paper titles
- Author names (in order)
- Publication dates
- arXiv IDs

## Rate Limiting

The script includes a 1-second delay between requests to be respectful to the arXiv API servers.

## Output Example

For each paper, the script provides:
```typescript
// 2302.07459: The Capacity for Moral Self-Correction in Large Language Models
// Authors: Deep Ganguli, Amanda Askell, Nicholas Schiefer, ...
// Published: 2023-02-15T04:25:40Z
// URL: https://arxiv.org/abs/2302.07459
// Authors array for TypeScript:
authors: ["Deep Ganguli", "Amanda Askell", "Nicholas Schiefer", ...],
```

## Customization

To modify the list of papers, edit the `arxivInputs` array in the `main()` function of `fetch-arxiv-authors.ts`.