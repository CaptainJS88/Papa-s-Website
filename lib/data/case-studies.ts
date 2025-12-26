export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "regulatory-approval-acceleration",
    title: "Accelerating Regulatory Approval for Novel Drug",
    client: "Mid-Size Biotech Company",
    industry: "Oncology",
    challenge: "A biotech company needed to navigate complex FDA requirements for a novel oncology drug while meeting aggressive timelines for patient access.",
    solution: "Developed a comprehensive regulatory strategy, prepared all submission documents, and coordinated with FDA through pre-IND meetings and the approval process. Implemented risk-based approach to prioritize critical path activities.",
    results: [
      "Reduced approval timeline by 6 months",
      "First-cycle approval achieved",
      "Zero major deficiencies in submission",
      "Established framework for future submissions"
    ]
  },
  {
    slug: "manufacturing-optimization",
    title: "Manufacturing Process Optimization & Cost Reduction",
    client: "Global Pharmaceutical Manufacturer",
    industry: "Generic Pharmaceuticals",
    challenge: "A manufacturing facility was experiencing high rejection rates, production delays, and escalating costs for a key product line.",
    solution: "Conducted comprehensive process analysis, identified root causes, and implemented targeted improvements. Redesigned critical process steps, enhanced training programs, and established real-time monitoring systems.",
    results: [
      "30% reduction in batch rejection rates",
      "20% improvement in production efficiency",
      "$2M annual cost savings",
      "Enhanced GMP compliance scores"
    ]
  },
  {
    slug: "technology-transfer-success",
    title: "Successful Technology Transfer Across Continents",
    client: "Multinational Pharma Corporation",
    industry: "Biologics",
    challenge: "Transferring a complex biologics manufacturing process from a European R&D facility to a new Asian production site while maintaining quality and regulatory compliance.",
    solution: "Led cross-functional team through detailed transfer planning, executed comprehensive validation protocols, provided extensive training, and established robust documentation systems. Managed regulatory submissions in multiple jurisdictions.",
    results: [
      "On-time transfer completion",
      "Zero quality issues in first 12 months",
      "Regulatory approval in 3 countries",
      "Knowledge transfer program established"
    ]
  }
];


