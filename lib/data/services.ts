import type { LucideIcon } from "lucide-react";
import { Factory, FileCheck, ArrowRightLeft, ShieldCheck, FolderKanban } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "manufacturing",
    title: "Pharmaceutical Manufacturing Consulting",
    description: "Expert guidance on manufacturing processes, optimization, and compliance.",
    icon: Factory,
    features: [
      "Process optimization and efficiency",
      "GMP compliance and validation",
      "Equipment selection and qualification",
      "Batch record review and improvement",
      "Manufacturing troubleshooting"
    ]
  },
  {
    id: "regulatory",
    title: "Regulatory Affairs Guidance",
    description: "Navigate complex regulatory requirements with confidence.",
    icon: FileCheck,
    features: [
      "FDA and EMA submission support",
      "Regulatory strategy development",
      "Documentation and dossier preparation",
      "Compliance audits and gap analysis",
      "Post-approval change management"
    ]
  },
  {
    id: "technology-transfer",
    title: "Technology Transfer & Scale-Up",
    description: "Seamless transfer of processes from development to commercial production.",
    icon: ArrowRightLeft,
    features: [
      "Process transfer planning and execution",
      "Scale-up strategy and risk assessment",
      "Technology transfer protocols",
      "Training and knowledge transfer",
      "Validation and verification support"
    ]
  },
  {
    id: "qa-qc",
    title: "QA/QC Systems Setup",
    description: "Establish robust quality assurance and quality control systems.",
    icon: ShieldCheck,
    features: [
      "Quality system design and implementation",
      "SOP development and training",
      "Laboratory setup and validation",
      "Data integrity and documentation",
      "Quality metrics and KPIs"
    ]
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "End-to-end project management for pharmaceutical initiatives.",
    icon: FolderKanban,
    features: [
      "Project planning and scheduling",
      "Risk management and mitigation",
      "Stakeholder coordination",
      "Budget and resource management",
      "Timeline and milestone tracking"
    ]
  }
];


