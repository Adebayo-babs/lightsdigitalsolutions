export type CaseStudyKind = "web" | "mobile";

export interface CaseStudy {
  slug: string;
  title: string;
  kind: CaseStudyKind;
  tagLabel: string;
  problem: string;
  solution: string;
  result?: string;
  tech: string[];
  liveUrl?: string;
  statusLabel?: string;
  image: string;
  size: "wide" | "narrow";
}

export interface ServiceItem {
  title: string;
  description: string;
  proofLabel?: string;
  proofHref?: string;
}
