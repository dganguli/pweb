import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Ruler, ScrollText, Wrench, Brain, Bot, ChevronDown } from 'lucide-react';

const RoleBadge = ({ role }) => {
  if (!role) return null;

  const getBadgeColors = () => {
    switch (role.toLowerCase()) {
      case 'first author':
        return 'bg-pink-50/30 text-pink-500/60 border-pink-100/30';
      case 'last author':
        return 'bg-orange-50/30 text-orange-500/60 border-orange-100/30';
      case 'middle author - evals':
        return 'bg-yellow-50/30 text-yellow-600/60 border-yellow-100/30';
      default:
        return 'bg-gray-50/30 text-gray-400/60 border-gray-100/30';
    }
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full border ${getBadgeColors()}`}>
      {role}
    </span>
  );
};

const ResearchSection = ({ title, icon: Icon, gradient, hoverGradient, papers, textColor, isOpen, onToggle }: any) => (
  <div className="transform transition-transform">
    <Card className="bg-white/80 backdrop-blur border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
      <div className={`h-1 ${gradient}`}></div>
      
      <button 
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className={`w-full px-6 py-4 transition-colors flex items-center justify-between ${isOpen ? 'bg-gray-50' : ''}`}>
          <div className="flex items-center gap-2 text-2xl">
            <Icon className={`h-6 w-6 ${textColor}`} />
            <span className={textColor}>{title}</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${textColor} ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>
      </button>

      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <CardContent>
          <ul className="space-y-4">
            {papers.map((paper: any, i: any) => (
              <li key={i}>
                <a 
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-lg ${hoverGradient} transition-all duration-200 border border-orange-100 hover:shadow-md group`}
                >
                  <h4 className="font-semibold text-gray-900 group-hover:text-gray-700">{paper.title}</h4>
                  <p className="text-gray-600 text-sm flex items-center gap-2">
                    {paper.details}
                  <RoleBadge role={paper.role} />
                    <svg 
                      className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
    </Card>
  </div>
);

const PersonalWebsite = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const researchSections = [
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
          link: "https://dl.acm.org/doi/10.1145/3630106.3658979"
        },
        {
          title: "The Capacity for Moral Self-Correction in Large Language Models",
          details: "arXiv, Feb 2023",
          link: "https://arxiv.org/abs/2302.07459"
        },
        {
          title: "Red Teaming Language Models to Reduce Harms",
          details: "arXiv, Aug 2022",
          link: "https://arxiv.org/abs/2209.07858"
        },
        {
          title: "Constitutional AI: Harmlessness from AI Feedback",
          details: "arXiv, Dec 2022",
          link: "https://arxiv.org/abs/2212.08073"
        },
        {
          title: "Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback",
          details: "arXiv, Apr 2022",
          link: "https://arxiv.org/abs/2204.05862"
        },
        {
          title: "Many-shot Jailbreaking",
          details: "NeurIPS, Dec 2024",
          link: "https://openreview.net/forum?id=cw5mgd71jW"
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
        },
        {
          title: "Evaluating Feature Steering: A Case Study in Mitigating Social Biases",
          details: "Anthropic Research Blog, Oct 2024",
          link: "https://www.anthropic.com/research/evaluating-feature-steering"
        },
        {
          title: "Towards Measuring the Representation of Subjective Global Opinions in Language Models",
          details: "COLM, Oct 2024",
          link: "https://openreview.net/forum?id=zl16jLb91v#discussion"
        },
        {
          title: "Measuring the Persuasiveness of Language Models",
          details: "Anthropic Research Blog, Apr 2024",
          link: "https://www.anthropic.com/research/measuring-model-persuasiveness"
        },
        {
          title: "Evaluating and Mitigating Discrimination in Language Model Decisions",
          details: "NeurIPS Algorithmic Fairness Workshop, Dec 2024",
          link: "https://arxiv.org/abs/2312.03689"
        },
        {
          title: "Discovering Language Model Behaviors with Model-Written Evaluations",
          details: "ACL, July 2023",
          link: "https://aclanthology.org/2023.findings-acl.847/"
        },
        {
          title: "Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models",
          details: "TMLR, May 2022",
          link: "https://arxiv.org/abs/2206.04615"
        }
      ]
    },
    {
      id: 'policy',
      title: "ai policy and governance",
      icon: ScrollText,
      gradient: "bg-gradient-to-r from-yellow-400 to-pink-400",
      hoverGradient: "hover:bg-gradient-to-r hover:from-yellow-50 hover:to-pink-50",
      textColor: "text-yellow-600",
      papers: [
        {
          title: "Anthropic Economic Index: Understanding AI’s Effects on the Economy Over Time",
          details: "Anthropic Economic Index, Feb 2025",
          link: "https://www.anthropic.com/economic-index"
        },
        {
          title: "Challenges in Evaluating AI Systems",
          details: "Anthropic Research Blog, Oct 2023",
          link: "https://www.anthropic.com/research/evaluating-ai-systems"
        },
        {
          title: "Opportunities and Risks of LLMs for Scalable Deliberation with Polis",
          details: "arXiv, Jun 2023",
          link: "https://arxiv.org/abs/2306.11932"
        },
        {
          title: "Testing and Mitigating Elections-related Risks from AI",
          details: "Anthropic Research Blog, Jun 2024",
          link: "https://www.anthropic.com/news/testing-and-mitigating-elections-related-risks"
        },  
        {
          title: "Predictability and Surprise in Large Generative Models",
          details: "FAccT, Jun 2022",
          link: "https://dl.acm.org/doi/10.1145/3531146.3533229"
        },
        {
          title: "Understanding the Capabilities, Limitations, and Societal Impact of Large Language Models",
          details: "arXiv, Feb 2021",
          link: "https://arxiv.org/abs/2102.02503"
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
      title: "computational neuroscience",
      icon: Brain,
      gradient: "bg-gradient-to-r from-pink-400 to-purple-400",
      hoverGradient: "hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50",
      textColor: "text-pink-500",
      papers: [
        {
          title: "Neural and Perceptual Signatures of Efficient Sensory Coding",
          details: "arXiv, Feb 2016",
          link: "https://arxiv.org/abs/1603.00058"
        },
        {
          title: "Efficient Sensory Encoding and Bayesian Inference with Heterogeneous Neural Populations",
          details: "Neural Computation, Oct 2014",
          link: "https://direct.mit.edu/neco/article-abstract/26/10/2103/8022/Efficient-Sensory-Encoding-and-Bayesian-Inference?redirectedFrom=PDF"
        },
        {
          title: "Implicit Encoding of Prior Probabilities in Optimal Neural Populations",
          details: "NeurIPS, Dec 2010",
          link: "https://proceedings.neurips.cc/paper_files/paper/2010/hash/f9a40a4780f5e1306c46f1c8daecee3b-Abstract.html"
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
          link: "https://arxiv.org/abs/2412.13678"
        },
        {
          title: "Starfish: Open Source Image Based Transcriptomics and Proteomics Tools",
          details: "JOSS, Jun 2020",
          link: "https://joss.theoj.org/papers/10.21105/joss.02440"
        },
        {
          title: "Druid: A Real-time Analytical Data Store",
          details: "ACM SIGMOD, Jun 2014",
          link: "https://dl.acm.org/doi/10.1145/2588555.2595631"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-b from-pink-500 via-orange-400 to-yellow-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,0 C200,40 400,-20 600,10 C800,40 1000,0 1200,20 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.1)"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="M0,0 C200,40 400,-20 600,10 C800,40 1000,0 1200,20 L1200,120 L0,120 Z;
                        M0,20 C200,0 400,40 600,30 C800,20 1000,40 1200,0 L1200,120 L0,120 Z;
                        M0,0 C200,40 400,-20 600,10 C800,40 1000,0 1200,20 L1200,120 L0,120 Z"
              />
            </path>
            <path 
              d="M0,20 C300,60 600,20 900,40 C1000,50 1100,30 1200,40 L1200,120 L0,120 Z" 
              fill="rgba(255,255,255,0.05)"
            >
              <animate
                attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                values="M0,20 C300,60 600,20 900,40 C1000,50 1100,30 1200,40 L1200,120 L0,120 Z;
                        M0,40 C300,20 600,60 900,20 C1000,30 1100,50 1200,20 L1200,120 L0,120 Z;
                        M0,20 C300,60 600,20 900,40 C1000,50 1100,30 1200,40 L1200,120 L0,120 Z"
              />
            </path>
          </svg>
        </div>

        <div className="container max-w-4xl mx-auto px-4 pt-16 pb-32 relative">
          <div className="flex flex-col items-center gap-8">
            <div className="relative w-48">
              <div className="absolute inset-0 bg-yellow-400 rounded-full scale-110 opacity-75 blur-sm"></div>
              <img 
                src="dg.png"
                alt="Deep Ganguli"
                className="rounded-full shadow-lg w-48 h-48 object-cover relative z-10 transition-all duration-300"
              />
            </div>
            
            <div className="text-center z-10">
              <h1 className="text-6xl font-black mb-4 text-white drop-shadow-lg">
                deep ganguli
              </h1>
              <p className="text-2xl mb-2 font-light text-yellow-100">
                research scientist at anthropic
              </p>
              <p className="text-xl mb-4 text-white/90">
                making ai work for everyone
              </p>
            </div>
          </div>
        </div>

        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C600,120 1000,60 1200,0 L1200,120 L0,120 Z" fill="rgb(255 247 237)" />
        </svg>
      </header>

      {/* About Section */}
      <div className="container max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white/50 backdrop-blur rounded-xl py-12 px-4 shadow-lg">
          <div className="text-center">
            <h2 className="text-4xl font-black bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6">
              about me
            </h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            I am a research scientist at Anthropic, where I started and lead the societal impacts team. Prior to that, I was the founding research director at the Stanford Institute for Human Centered AI (HAI). I did my PhD in Computational Neuroscience at NYU and obtained my BS in Electrical Engineering and Computer Science (EECS) from Berkeley. For fun, I surf, play bass with my band, and read widely across the humanities and social sciences.
          </p>
        </div>
      </div>

      {/* Research Highlights */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center py-8">
          <h2 className="text-4xl font-black bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
            research
          </h2>
        </div>

        {/* Research Categories */}
        <div className="space-y-4 relative">
          <div className="space-y-4">
            {researchSections.map((section) => (
              <ResearchSection 
                key={section.id}
                {...section}
                isOpen={openSection === section.id}
                onToggle={() => setOpenSection(openSection === section.id ? null : section.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-500 to-orange-400 mt-12 text-white relative overflow-hidden">
        <svg className="absolute top-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C600,0 1000,60 1200,120 L1200,0 L0,0 Z" fill="rgb(255 247 237)" />
        </svg>
        <div className="max-w-4xl mx-auto py-16 px-4 text-center relative">
          <div className="flex justify-center gap-6 mb-6">
            {/* Social Links */}
            <a href="https://www.linkedin.com/in/dganguli" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://scholar.google.com/citations?user=rG3xW3UAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
              </svg>
            </a>
            <a href="https://github.com/dganguli" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:deep@anthropic.com" className="hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
          <div className="text-sm opacity-90">
            <p className="mb-2">© 2024 deep ganguli</p>
            <p className="text-xs opacity-75">built with claude 3.5 sonnet</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;