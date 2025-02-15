import { ResearchSection } from '../types';
import { Bot, Ruler, ScrollText, Brain, Wrench } from 'lucide-react';

export const researchSections: ResearchSection[] = [
  {
      id: 'alignment',
      title: "ai alignment",
      icon: Bot,
      gradient: "bg-gradient-to-r from-pink-500 to-orange-400",
      hoverGradient: "hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50",
      textColor: "text-pink-500",
      papers: [
        {
          title: "Collective Constitutional AI: Aligning a Language Model with Public Input",
          details: "FAccT, Jun 2024",
          link: "https://dl.acm.org/doi/10.1145/3630106.3658979",
          role: "last author"
        },
        {
          title: "Many-shot Jailbreaking",
          details: "NeurIPS, Dec 2024",
          link: "https://openreview.net/forum?id=cw5mgd71jW"
        },
        {
          title: "The Capacity for Moral Self-Correction in Large Language Models",
          details: "arXiv, Feb 2023",
          link: "https://arxiv.org/abs/2302.07459",
          role: "first author"
        },
        {
          title: "Red Teaming Language Models to Reduce Harms",
          details: "arXiv, Aug 2022",
          link: "https://arxiv.org/abs/2209.07858",
          role: "first author"
        },
        {
          title: "Constitutional AI: Harmlessness from AI Feedback",
          details: "arXiv, Dec 2022",
          link: "https://arxiv.org/abs/2212.08073",
          role: "middle author - evals"
        },
        {
          title: "Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback",
          details: "arXiv, Apr 2022",
          link: "https://arxiv.org/abs/2204.05862",
          role: "middle author - evals"
        }
      ]
    },
    {
      id: 'evals',
      title: "ai evaluation",
      icon: Ruler,
      gradient: "bg-gradient-to-r from-orange-400 to-yellow-400",
      hoverGradient: "hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50",
      textColor: "text-orange-500",
      papers: [
        {
          title: "Which Economic Tasks are Performed with AI? Evidence from Millions of Claude Conversations",
          details: "arXiv, Feb 2025",
          link: "https://assets.anthropic.com/m/2e23255f1e84ca97/original/Economic_Tasks_AI_Paper.pdf",
          role: "last author"
        },
        {
          title: "Evaluating Feature Steering: A Case Study in Mitigating Social Biases",
          details: "Anthropic Research Blog, Oct 2024",
          link: "https://www.anthropic.com/research/evaluating-feature-steering",
          role: "last author"
        },
        {
          title: "Towards Measuring the Representation of Subjective Global Opinions in Language Models",
          details: "COLM, Oct 2024",
          link: "https://openreview.net/forum?id=zl16jLb91v#discussion",
          role: "last author"
        },
        {
          title: "Measuring the Persuasiveness of Language Models",
          details: "Anthropic Research Blog, Apr 2024",
          link: "https://www.anthropic.com/research/measuring-model-persuasiveness",
          role: "last author"
        },
        {
          title: "Evaluating and Mitigating Discrimination in Language Model Decisions",
          details: "NeurIPS Algorithmic Fairness Workshop, Dec 2024",
          link: "https://arxiv.org/abs/2312.03689",
          role: "last author"
        },
        {
          title: "Discovering Language Model Behaviors with Model-Written Evaluations",
          details: "ACL, July 2023",
          link: "https://aclanthology.org/2023.findings-acl.847/",
          role: "middle author - evals"
        },
        {
          title: "Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models",
          details: "TMLR, May 2022",
          link: "https://arxiv.org/abs/2206.04615",
          role: "middle author - evals"
        }
      ]
    },
    {
      id: 'policy',
      title: "ai policy",
      icon: ScrollText,
      gradient: "bg-gradient-to-r from-yellow-400 to-pink-400",
      hoverGradient: "hover:bg-gradient-to-r hover:from-yellow-50 hover:to-pink-50",
      textColor: "text-yellow-600",
      papers: [
        {
          title: "Anthropic Economic Index: Understanding AI’s Effects on the Economy Over Time",
          details: "Anthropic Economic Index, Feb 2025",
          link: "https://www.anthropic.com/economic-index",
          role: "last author"
        },
        {
          title: "Challenges in Evaluating AI Systems",
          details: "Anthropic Research Blog, Oct 2023",
          link: "https://www.anthropic.com/research/evaluating-ai-systems",
          role: "first author"
        },
        {
          title: "Opportunities and Risks of LLMs for Scalable Deliberation with Polis",
          details: "arXiv, Jun 2023",
          link: "https://arxiv.org/abs/2306.11932",
          role: "last author"
        },
        {
          title: "Testing and Mitigating Elections-related Risks from AI",
          details: "Anthropic Research Blog, Jun 2024",
          link: "https://www.anthropic.com/news/testing-and-mitigating-elections-related-risks"
        },  
        {
          title: "Predictability and Surprise in Large Generative Models",
          details: "FAccT, Jun 2022",
          link: "https://dl.acm.org/doi/10.1145/3531146.3533229",
          role: "first author"
        },
        {
          title: "Understanding the Capabilities, Limitations, and Societal Impact of Large Language Models",
          details: "arXiv, Feb 2021",
          link: "https://arxiv.org/abs/2102.02503",
          role: "last author"
        },
        {
          title: "The AI Index 2021 Annual Report",
          details: "arXiv, Mar 2021",
          link: "https://arxiv.org/abs/2103.06312"
        },
      ]
    },
    {
      id: 'neuroscience',
      title: "neuroscience",
      icon: Brain,
      gradient: "bg-gradient-to-r from-pink-400 to-purple-400",
      hoverGradient: "hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50",
      textColor: "text-pink-500",
      papers: [
        {
          title: "Neural and Perceptual Signatures of Efficient Sensory Coding",
          details: "arXiv, Feb 2016",
          link: "https://arxiv.org/abs/1603.00058",
          role: "first author"
        },
        {
          title: "Efficient Sensory Encoding and Bayesian Inference with Heterogeneous Neural Populations",
          details: "Neural Computation, Oct 2014",
          link: "https://direct.mit.edu/neco/article-abstract/26/10/2103/8022/Efficient-Sensory-Encoding-and-Bayesian-Inference?redirectedFrom=PDF",
          role: "first author"
        },
        {
          title: "Implicit Encoding of Prior Probabilities in Optimal Neural Populations",
          details: "NeurIPS, Dec 2010",
          link: "https://proceedings.neurips.cc/paper_files/paper/2010/hash/f9a40a4780f5e1306c46f1c8daecee3b-Abstract.html",
          role: "first author"
        }
      ]
    },
    {
      id: 'software',
      title: "research engineering",
      icon: Wrench,
      gradient: "bg-gradient-to-r from-purple-400 to-orange-400",
      hoverGradient: "hover:bg-gradient-to-r hover:from-purple-50 hover:to-orange-50",
      textColor: "text-purple-500",
      papers: [
        {
          title: "Clio: Privacy-Preserving Insights into Real-World AI Use",
          details: "Arxiv, Dec 2024",
          link: "https://arxiv.org/abs/2412.13678",
          role: "last author"
        },
        {
          title: "Starfish: Open Source Image Based Transcriptomics and Proteomics Tools",
          details: "Journal of Open Source Software, Jun 2020",
          link: "https://joss.theoj.org/papers/10.21105/joss.02440",
          role: "first author"
        },
        {
          title: "Druid: A Real-time Analytical Data Store",
          details: "ACM SIGMOD, Jun 2014",
          link: "https://dl.acm.org/doi/10.1145/2588555.2595631"
        }
      ]
    }
];
