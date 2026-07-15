import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "shopease",
    title: "ShopEase",
    kind: "web",
    tagLabel: "Web · E-Commerce",
    problem:
      "A retail business needed to sell online without relying on a third-party marketplace that took a cut of every sale and controlled the customer relationship.",
    solution:
      "A full storefront with product catalog, cart, checkout, and Paystack payment integration, deployed and fully owned by the client — not rented from a platform.",
    result:
      "A live, working store the client controls end to end, with order data and customer relationships staying in-house.",
    tech: ["React", "Node.js", "PostgreSQL", "Paystack"],
    liveUrl: "https://adebayo-babs.github.io/ecommerce_ui/",
    image: "/images/e-commerce.png",
    size: "wide",
  },
  {
    slug: "trackzone-energy",
    title: "Trackzone Energy",
    kind: "web",
    tagLabel: "Web · Operations",
    problem:
      "Production and resource data lived across spreadsheets and reports, with no single place to see what was happening in real time.",
    solution:
      "A centralized dashboard for monitoring production and resource allocation with a public-facing site to match.",
    tech: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://www.trackzoneenergy.com",
    image: "/images/trackzon.png",
    size: "narrow",
  },
  {
    slug: "elearning-platform",
    title: "Virtual Classroom Platform",
    kind: "web",
    tagLabel: "Web · Education",
    problem:
      "Running classes, assessments, and progress tracking across disconnected tools made it hard to see how students were actually doing.",
    solution:
      "One platform for virtual classes, course management, assessments, and student progress tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://carewisesuccess.com/",
    image: "/images/e-learning.png",
    size: "narrow",
  },
  {
    slug: "meditrack",
    title: "MediTrack",
    kind: "mobile",
    tagLabel: "Android App · Health",
    problem:
      "Patients on multi-drug prescriptions were missing doses with no simple way to track adherence or share updates with their doctor.",
    solution:
      "A medication reminder and health-tracking app with smart alerts and a channel for doctor communication.",
    tech: ["Flutter", "Firebase"],
    statusLabel: "In active use",
    image: "/images/meditrack.png",
    size: "wide",
  },
];
