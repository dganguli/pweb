import { PublicationWithMedia, ResearchSection } from '../types';
import { Bot, Ruler, ScrollText, Brain, Wrench, Hammer, Landmark } from 'lucide-react';

// Enhanced publication data with embedded media coverage
export const publicationsWithMedia: PublicationWithMedia[] = [
  // AI Alignment
  {
    id: 'claude-support-advice',
    title: "How People Use Claude for Support, Advice, and Companionship",
    details: "Anthropic Research Blog, Jun 2025",
    link: "https://www.anthropic.com/news/how-people-use-claude-for-support-advice-and-companionship",
    role: "last author",
    category: 'alignment',
    mediaCoverage: []
  },
  {
    id: 'values-in-wild',
    title: "Values in the Wild: Discovering and Analyzing Values in Real-World Language Model Interactions",
    details: "COLM, Apr 2025",
    link: "https://arxiv.org/abs/2504.15236",
    role: "last author",
    category: 'alignment',
    mediaCoverage: [
      {
        title: "Anthropic just analyzed 700,000 Claude conversations and found its AI has a moral code of its own",
        outlet: "VentureBeat",
        date: "Apr 2025",
        link: "https://venturebeat.com/ai/anthropic-just-analyzed-700000-claude-conversations-and-found-its-ai-has-a-moral-code-of-its-own/"
      }
    ]
  },
  {
    id: 'collective-constitutional-ai',
    title: "Collective Constitutional AI: Aligning a Language Model with Public Input",
    details: "FAccT, Jun 2024",
    link: "https://dl.acm.org/doi/10.1145/3630106.3658979",
    role: "last author",
    category: 'democracy',
    mediaCoverage: [
      {
        title: "The 3 Most Important AI Innovations of 2023",
        outlet: "Time Magazine",
        date: "Dec 2023",
        link: "https://time.com/6547982/3-big-ai-innovations-from-2023/"
      },
      {
        title: "What if We Could All Control AI?",
        outlet: "The New York Times",
        date: "Oct 2023",
        link: "https://www.nytimes.com/2023/10/17/technology/ai-chatbot-control.html"
      }
    ]
  },
  {
    id: 'many-shot-jailbreaking',
    title: "Many-shot Jailbreaking",
    details: "NeurIPS, Dec 2024",
    link: "https://openreview.net/forum?id=cw5mgd71jW",
    category: 'alignment',
    mediaCoverage: []
  },
  {
    id: 'moral-self-correction',
    title: "The Capacity for Moral Self-Correction in Large Language Models",
    details: "arXiv, Feb 2023",
    link: "https://arxiv.org/abs/2302.07459",
    role: "first author",
    category: 'alignment',
    mediaCoverage: [
      {
        title: "Language Models Might be Able to Self-correct Biases—If You Ask Them",
        outlet: "MIT Technology Review",
        date: "Mar 2023",
        link: "https://www.technologyreview.com/2023/03/20/1070067/language-models-may-be-able-to-self-correct-biases-if-you-ask-them-to/"
      }
    ]
  },
  {
    id: 'red-teaming',
    title: "Red Teaming Language Models to Reduce Harms",
    details: "arXiv, Aug 2022",
    link: "https://arxiv.org/abs/2209.07858",
    role: "first author",
    category: 'alignment',
    mediaCoverage: [
      {
        title: "When Hackers Descended to Test AI, They Found Flaws Aplenty",
        outlet: "The New York Times",
        date: "Aug 2023",
        link: "https://www.nytimes.com/2023/08/16/technology/ai-defcon-hackers.html"
      }
    ]
  },
  {
    id: 'constitutional-ai',
    title: "Constitutional AI: Harmlessness from AI Feedback",
    details: "arXiv, Dec 2022",
    link: "https://arxiv.org/abs/2212.08073",
    role: "middle author - evals",
    category: 'alignment',
    mediaCoverage: []
  },
  {
    id: 'rlhf-helpful-harmless',
    title: "Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback",
    details: "arXiv, Apr 2022",
    link: "https://arxiv.org/abs/2204.05862",
    role: "middle author - evals",
    category: 'alignment',
    mediaCoverage: []
  },

  // AI Evaluation
  {
    id: 'anthropic-interviewer',
    title: "Introducing Anthropic Interviewer: What 1,250 professionals told us about working with AI",
    details: "Anthropic Research Blog, Dec 2025",
    link: "https://www.anthropic.com/research/anthropic-interviewer",
    role: "last author",
    category: 'labor',
    mediaCoverage: [
      {
        title: "I Used Anthropic's Interviewer Tool to Share My AI Complaints",
        outlet: "ZDNet",
        date: "Dec 2025",
        link: "https://www.zdnet.com/article/i-used-anthropics-interviewer-tool-to-share-my-ai-complaints/"
      },
      {
        title: "Anthropic Will Start Using AI to Interview Its Users About Their Experience with AI",
        outlet: "The Verge",
        date: "Dec 2025",
        link: "https://www.theverge.com/ai-artificial-intelligence/838243/anthropic-will-start-using-ai-to-interview-its-users-about-their-experience-with-ai"
      }
    ]
  },
  {
    id: 'ai-transforming-work-anthropic',
    title: "How AI Is Transforming Work at Anthropic",
    details: "Anthropic Research Blog, Dec 2025",
    link: "https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic",
    role: "last author",
    category: 'labor',
    mediaCoverage: [
      {
        title: "Anthropic Turns Inward to Show How AI Affects Its Own Workforce",
        outlet: "Inc",
        date: "Dec 2025",
        link: "https://www.inc.com/kit-eaton/anthropic-turns-inward-to-show-how-ai-affects-its-own-workforce/91273789"
      },
      {
        title: "AI is making the workplace lonelier",
        outlet: "Axios",
        date: "Dec 2025",
        link: "https://www.axios.com/2025/12/13/ai-anthropic-chatbot-remote-work-jobs"
      }
    ]
  },
  {
    id: 'economic-tasks-ai',
    title: "Which Economic Tasks are Performed with AI? Evidence from Millions of Claude Conversations",
    details: "arXiv, Feb 2025",
    link: "https://arxiv.org/abs/2503.04761",
    role: "last author",
    category: 'labor',
    mediaCoverage: [
      {
        title: "Exclusive: Anthropic's Index Tracks AI Economy",
        outlet: "Axios",
        date: "Feb 2025",
        link: "https://www.axios.com/2025/02/10/anthropic-economic-index-ai-use-data"
      }
    ]
  },
  {
    id: 'feature-steering',
    title: "Evaluating Feature Steering: A Case Study in Mitigating Social Biases",
    details: "Anthropic Research Blog, Oct 2024",
    link: "https://www.anthropic.com/research/evaluating-feature-steering",
    role: "last author",
    category: 'evals',
    mediaCoverage: []
  },
  {
    id: 'global-opinions',
    title: "Towards Measuring the Representation of Subjective Global Opinions in Language Models",
    details: "COLM, Oct 2024",
    link: "https://openreview.net/forum?id=zl16jLb91v#discussion",
    role: "last author",
    category: 'evals',
    mediaCoverage: []
  },
  {
    id: 'measuring-persuasiveness',
    title: "Measuring the Persuasiveness of Language Models",
    details: "Anthropic Research Blog, Apr 2024",
    link: "https://www.anthropic.com/research/measuring-model-persuasiveness",
    role: "last author",
    category: 'evals',
    mediaCoverage: [
      {
        title: "What if Dario Amodei is Right About AI?",
        outlet: "The Ezra Klein Show | The New York Times",
        date: "Apr 2024",
        link: "https://www.nytimes.com/2024/04/12/opinion/ezra-klein-podcast-dario-amodei.html"
      }
    ]
  },
  {
    id: 'discrimination-decisions',
    title: "Evaluating and Mitigating Discrimination in Language Model Decisions",
    details: "NeurIPS Algorithmic Fairness Workshop, Dec 2024",
    link: "https://arxiv.org/abs/2312.03689",
    role: "last author",
    category: 'evals',
    mediaCoverage: [
      {
        title: "Anthropic Leads Charge Against AI Bias and Discrimination With New Research",
        outlet: "VentureBeat",
        date: "Dec 2023",
        link: "https://venturebeat.com/ai/anthropic-leads-charge-against-ai-bias-and-discrimination-with-new-research/"
      }
    ]
  },
  {
    id: 'model-written-evals',
    title: "Discovering Language Model Behaviors with Model-Written Evaluations",
    details: "ACL, July 2023",
    link: "https://aclanthology.org/2023.findings-acl.847/",
    role: "middle author - evals",
    category: 'evals',
    mediaCoverage: []
  },
  {
    id: 'big-bench',
    title: "Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models",
    details: "TMLR, May 2022",
    link: "https://arxiv.org/abs/2206.04615",
    role: "middle author - evals",
    category: 'evals',
    mediaCoverage: []
  },

  // AI Policy
  {
    id: 'ai-democracy',
    title: "The Impact of Advanced AI Systems on Democracy",
    details: "Nature Human Behaviour, Oct 2025",
    link: "https://www.nature.com/articles/s41562-025-02309-z",
    role: "middle author",
    category: 'democracy',
    mediaCoverage: []
  },
  {
    id: 'anthropic-economic-index',
    title: "Anthropic Economic Index: Understanding AI's Effects on the Economy Over Time",
    details: "Anthropic Economic Index, Feb 2025",
    link: "https://www.anthropic.com/economic-index",
    role: "last author",
    category: 'labor',
    mediaCoverage: []
  },
  {
    id: 'challenges-evaluating-ai',
    title: "Challenges in Evaluating AI Systems",
    details: "Anthropic Research Blog, Oct 2023",
    link: "https://www.anthropic.com/research/evaluating-ai-systems",
    role: "first author",
    category: 'policy',
    mediaCoverage: []
  },
  {
    id: 'llms-polis-deliberation',
    title: "Opportunities and Risks of LLMs for Scalable Deliberation with Polis",
    details: "arXiv, Jun 2023",
    link: "https://arxiv.org/abs/2306.11932",
    role: "last author",
    category: 'democracy',
    mediaCoverage: []
  },
  {
    id: 'elections-risks-ai',
    title: "Testing and Mitigating Elections-related Risks from AI",
    details: "Anthropic Research Blog, Jun 2024",
    link: "https://www.anthropic.com/news/testing-and-mitigating-elections-related-risks",
    category: 'democracy',
    mediaCoverage: []
  },
  {
    id: 'predictability-surprise',
    title: "Predictability and Surprise in Large Generative Models",
    details: "FAccT, Jun 2022",
    link: "https://dl.acm.org/doi/10.1145/3531146.3533229",
    role: "first author",
    category: 'policy',
    mediaCoverage: [
      {
        title: "The Unpredictable Abilities Emerging From Large AI Models",
        outlet: "Quanta Magazine",
        date: "Mar 2023",
        link: "https://www.quantamagazine.org/the-unpredictable-abilities-emerging-from-large-ai-models-20230316/"
      }
    ]
  },
  {
    id: 'capabilities-limitations-societal',
    title: "Understanding the Capabilities, Limitations, and Societal Impact of Large Language Models",
    details: "arXiv, Feb 2021",
    link: "https://arxiv.org/abs/2102.02503",
    role: "last author",
    category: 'policy',
    mediaCoverage: [
      {
        title: "OpenAI & Stanford Researchers Call for Urgent Action to Address Harms of LLMs Like GPT-3",
        outlet: "VentureBeat",
        date: "Feb 2021",
        link: "https://venturebeat.com/ai/openai-and-stanford-researchers-call-for-urgent-action-to-address-harms-of-large-language-models-like-gpt-3/"
      }
    ]
  },
  {
    id: 'ai-index-2021',
    title: "The AI Index 2021 Annual Report",
    details: "arXiv, Mar 2021",
    link: "https://arxiv.org/abs/2103.06312",
    category: 'policy',
    mediaCoverage: []
  },

  // Neuroscience
  {
    id: 'neural-perceptual-signatures',
    title: "Neural and Perceptual Signatures of Efficient Sensory Coding",
    details: "arXiv, Feb 2016",
    link: "https://arxiv.org/abs/1603.00058",
    role: "first author",
    category: 'neuroscience',
    mediaCoverage: []
  },
  {
    id: 'efficient-sensory-encoding',
    title: "Efficient Sensory Encoding and Bayesian Inference with Heterogeneous Neural Populations",
    details: "Neural Computation, Oct 2014",
    link: "https://direct.mit.edu/neco/article-abstract/26/10/2103/8022/Efficient-Sensory-Encoding-and-Bayesian-Inference?redirectedFrom=PDF",
    role: "first author",
    category: 'neuroscience',
    mediaCoverage: []
  },
  {
    id: 'implicit-encoding-priors',
    title: "Implicit Encoding of Prior Probabilities in Optimal Neural Populations",
    details: "NeurIPS, Dec 2010",
    link: "https://proceedings.neurips.cc/paper_files/paper/2010/hash/f9a40a4780f5e1306c46f1c8daecee3b-Abstract.html",
    role: "first author",
    category: 'neuroscience',
    mediaCoverage: []
  },

  // Research Engineering
  {
    id: 'clio-privacy-insights',
    title: "Clio: Privacy-Preserving Insights into Real-World AI Use",
    details: "Arxiv, Dec 2024",
    link: "https://arxiv.org/abs/2412.13678",
    role: "last author",
    category: 'software',
    mediaCoverage: [
      {
        title: "How Claude Uses AI to Identify New Threats",
        outlet: "Platformer",
        date: "Dec 2024",
        link: "https://www.platformer.news/how-claude-uses-ai-to-identify-new-threats/"
      }
    ]
  },
  {
    id: 'starfish-transcriptomics',
    title: "Starfish: Open Source Image Based Transcriptomics and Proteomics Tools",
    details: "Journal of Open Source Software, Jun 2020",
    link: "https://joss.theoj.org/papers/10.21105/joss.02440",
    role: "first author",
    category: 'software',
    mediaCoverage: [
      {
        title: "Starfish Enterprise: Finding RNA Patterns in Single Cells",
        outlet: "Nature",
        date: "Aug 2019",
        link: "https://www.nature.com/articles/d41586-019-02477-9"
      }
    ]
  },
  {
    id: 'druid-analytical-store',
    title: "Druid: A Real-time Analytical Data Store",
    details: "ACM SIGMOD, Jun 2014",
    link: "https://dl.acm.org/doi/10.1145/2588555.2595631",
    category: 'software',
    mediaCoverage: []
  }
];

// Standalone media coverage (not tied to a specific publication)
export const standaloneMedia: { title: string; outlet: string; date: string; link: string; description?: string }[] = [
  {
    title: "It's their job to keep AI from destroying everything",
    outlet: "The Verge",
    date: "Dec 2025",
    link: "https://www.theverge.com/ai-artificial-intelligence/836335/anthropic-societal-impacts-team-ai-claude-effects",
    description: "Societal Impacts Team"
  }
];

// Research sections configuration (unchanged structure for backward compatibility)
export const researchSections: ResearchSection[] = [
  {
    id: 'alignment',
    title: "ai alignment",
    icon: Bot,
    gradient: "bg-gradient-to-r from-pink-500 to-orange-400",
    hoverGradient: "hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50",
    textColor: "text-pink-500",
    papers: publicationsWithMedia.filter(p => p.category === 'alignment').map(p => ({
      title: p.title,
      details: p.details,
      link: p.link,
      role: p.role
    }))
  },
  {
    id: 'evals',
    title: "ai evaluation",
    icon: Ruler,
    gradient: "bg-gradient-to-r from-orange-400 to-yellow-400",
    hoverGradient: "hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50",
    textColor: "text-orange-500",
    papers: publicationsWithMedia.filter(p => p.category === 'evals').map(p => ({
      title: p.title,
      details: p.details,
      link: p.link,
      role: p.role
    }))
  },
  {
    id: 'labor',
    title: "ai and labor",
    icon: Hammer,
    gradient: "bg-gradient-to-r from-red-500 to-orange-500",
    hoverGradient: "hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50",
    textColor: "text-red-500",
    papers: publicationsWithMedia.filter(p => p.category === 'labor').map(p => ({
      title: p.title,
      details: p.details,
      link: p.link,
      role: p.role
    }))
  },
  {
    id: 'democracy',
    title: "ai and democracy",
    icon: Landmark,
    gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
    hoverGradient: "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50",
    textColor: "text-blue-500",
    papers: publicationsWithMedia.filter(p => p.category === 'democracy').sort((a, b) => {
      const parseDate = (dateStr: string) => {
        const [, date] = dateStr.split(', ');
        const [month, year] = date.split(' ');
        const monthMap: { [key: string]: number } = {
          'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
          'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        };
        return new Date(parseInt(year), monthMap[month] || 0);
      };
      return parseDate(b.details).getTime() - parseDate(a.details).getTime();
    }).map(p => ({
      title: p.title,
      details: p.details,
      link: p.link,
      role: p.role
    }))
  },
  {
    id: 'policy',
    title: "ai policy",
    icon: ScrollText,
    gradient: "bg-gradient-to-r from-yellow-400 to-pink-400",
    hoverGradient: "hover:bg-gradient-to-r hover:from-yellow-50 hover:to-pink-50",
    textColor: "text-yellow-600",
    papers: publicationsWithMedia.filter(p => p.category === 'policy').map(p => ({
      title: p.title,
      details: p.details,
      link: p.link,
      role: p.role
    }))
  },
  {
    id: 'neuroscience',
    title: "neuroscience",
    icon: Brain,
    gradient: "bg-gradient-to-r from-pink-400 to-purple-400",
    hoverGradient: "hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50",
    textColor: "text-pink-500",
    papers: publicationsWithMedia.filter(p => p.category === 'neuroscience').map(p => ({
      title: p.title,
      details: p.details,
      link: p.link,
      role: p.role
    }))
  },
  {
    id: 'software',
    title: "research engineering",
    icon: Wrench,
    gradient: "bg-gradient-to-r from-purple-400 to-orange-400",
    hoverGradient: "hover:bg-gradient-to-r hover:from-purple-50 hover:to-orange-50",
    textColor: "text-purple-500",
    papers: publicationsWithMedia.filter(p => p.category === 'software').map(p => ({
      title: p.title,
      details: p.details,
      link: p.link,
      role: p.role
    }))
  }
];

// Helper functions for backward compatibility and new functionality
export const getPublicationById = (id: string): PublicationWithMedia | undefined => {
  return publicationsWithMedia.find(p => p.id === id);
};

export const getPublicationByTitle = (title: string): PublicationWithMedia | undefined => {
  return publicationsWithMedia.find(p => p.title === title);
};

export const getAllMediaItems = () => {
  const publicationMedia = publicationsWithMedia.flatMap(pub =>
    pub.mediaCoverage.map(media => ({
      ...media,
      description: pub.title
    }))
  );

  // Combine publication media with standalone media
  const allItems = [...publicationMedia, ...standaloneMedia];

  // Sort by date (newest first)
  return allItems.sort((a, b) => {
    // Parse dates to compare (assuming format like "Apr 2025", "Feb 2021", etc.)
    const parseDate = (dateStr: string) => {
      const [month, year] = dateStr.split(' ');
      const monthMap: { [key: string]: number } = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };
      return new Date(parseInt(year), monthMap[month] || 0);
    };
    
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    
    return dateB.getTime() - dateA.getTime(); // Newest first
  });
};

export const getMediaForPublication = (publicationId: string) => {
  const pub = getPublicationById(publicationId);
  return pub?.mediaCoverage || [];
};

export const getRecentPublications = (count: number = 3): PublicationWithMedia[] => {
  const sortedPublications = [...publicationsWithMedia].sort((a, b) => {
    const parseDate = (dateStr: string) => {
      const [venue, date] = dateStr.split(', ');
      const [month, year] = date.split(' ');
      const monthMap: { [key: string]: number } = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };
      return new Date(parseInt(year), monthMap[month] || 0);
    };
    
    const dateA = parseDate(a.details);
    const dateB = parseDate(b.details);
    
    return dateB.getTime() - dateA.getTime();
  });
  
  return sortedPublications.slice(0, count);
};