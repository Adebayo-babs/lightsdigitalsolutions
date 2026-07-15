export interface ServiceRow {
  name: string;
  price: string;
}

export interface ServiceCategory {
  key: string;
  label: string;
  blurb: string;
  services: ServiceRow[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    key: "web",
    label: "Web Development",
    blurb:
      "From a single landing page to a full multi-vendor marketplace — fast, mobile-responsive, SEO-ready, tailored to your industry.",
    services: [
      { name: "One-Page Landing Website", price: "150,000" },
      { name: "Personal Portfolio Website", price: "180,000" },
      { name: "Business Website (5–10 Pages)", price: "750,000" },
      { name: "Corporate Website", price: "2,000,000" },
      { name: "Church Website", price: "1,000,000" },
      { name: "School Website", price: "2,000,000" },
      { name: "Hospital Website", price: "4,000,000" },
      { name: "Hotel Website", price: "3,500,000" },
      { name: "Restaurant Website", price: "2,000,000" },
      { name: "NGO Website", price: "2,000,000" },
      { name: "Real Estate Website", price: "2,000,000" },
      { name: "News / Blog Website", price: "1,500,000" },
      { name: "Job Portal", price: "1,500,000" },
      { name: "E-Commerce Website", price: "2,000,000" },
      { name: "Multi-Vendor Marketplace", price: "2,500,000" },
      { name: "Learning Management System (LMS)", price: "3,500,000" },
      { name: "Booking & Reservation System", price: "2,000,000" },
      { name: "Customer Portal", price: "2,500,000" },
      { name: "Admin Dashboard", price: "1,500,000" },
      { name: "Custom Web Application", price: "From 1,200,000" },
    ],
  },
  {
    key: "mobile",
    label: "Mobile Apps",
    blurb:
      "Native Android and iOS, or cross-platform builds using Flutter / React Native — built for performance and offline reliability.",
    services: [
      { name: "Basic Android App", price: "600,000" },
      { name: "Basic iOS App", price: "850,000" },
      { name: "Cross-Platform App (Flutter / React Native)", price: "1,200,000" },
      { name: "Business Mobile App", price: "2,500,000" },
      { name: "E-Commerce Mobile App", price: "2,000,000" },
      { name: "Food Delivery App", price: "2,500,000" },
      { name: "Ride-Hailing App", price: "3,500,000" },
      { name: "Hospital Management App", price: "2,200,000" },
      { name: "School Mobile App", price: "1,800,000" },
      { name: "Banking / Fintech App", price: "From 4,000,000" },
      { name: "Social Media App", price: "From 4,500,000" },
      { name: "Streaming App", price: "From 3,000,000" },
    ],
  },
  {
    key: "business",
    label: "Business Software",
    blurb: "Operational systems that run your organisation — inventory, HR, hospital, school, hotel, and more.",
    services: [
      { name: "Inventory Management System", price: "3,000,000" },
      { name: "Point of Sale (POS)", price: "5,000,000" },
      { name: "Payroll Management System", price: "5,000,000" },
      { name: "Human Resource Management System", price: "4,300,000" },
      { name: "School Management System", price: "2,000,000" },
      { name: "Hospital Management System", price: "3,000,000" },
      { name: "Hotel Management System", price: "2,500,000" },
      { name: "Restaurant Management System", price: "2,500,000" },
      { name: "Customer Relationship Management (CRM)", price: "2,000,000" },
      { name: "Enterprise Resource Planning (ERP)", price: "From 6,000,000" },
      { name: "Accounting Software", price: "2,500,000" },
      { name: "Attendance System", price: "3,000,000" },
      { name: "Visitor Management System", price: "2,000,000" },
      { name: "Asset Management System", price: "2,000,000" },
    ],
  },
  {
    key: "enterprise",
    label: "Enterprise & Sector-Specific",
    blurb:
      "Larger, sector-specific platforms for government, finance, insurance, and logistics — built to formal specification.",
    services: [
      { name: "Government Portal", price: "From 10,000,000" },
      { name: "Banking Solution", price: "From 15,000,000" },
      { name: "Insurance Platform", price: "From 10,000,000" },
      { name: "Logistics Management System", price: "From 3,500,000" },
      { name: "Fleet Management System", price: "From 3,000,000" },
      { name: "Cooperative Management Software", price: "From 3,000,000" },
      { name: "SACCO Management Software", price: "From 2,500,000" },
      { name: "Voting System", price: "From 15,000,000" },
      { name: "Examination Portal", price: "From 3,500,000" },
    ],
  },
  {
    key: "ai",
    label: "AI & Automation",
    blurb: "Practical AI features and automations that cut manual work — chatbots, WhatsApp automation, document processing.",
    services: [
      { name: "AI Chatbot", price: "800,000" },
      { name: "WhatsApp Automation", price: "700,000" },
      { name: "AI Customer Support System", price: "1,500,000" },
      { name: "AI Document Processing", price: "2,000,000" },
      { name: "Business Process Automation", price: "From 2,500,000" },
      { name: "AI Integration", price: "From 1,500,000" },
    ],
  },
  {
    key: "uiux",
    label: "UI/UX Design",
    blurb: "Interfaces designed around real user behaviour — from single landing pages to full product design systems.",
    services: [
      { name: "Landing Page UI Design", price: "80,000" },
      { name: "Website UI Design", price: "250,000" },
      { name: "Mobile App UI Design", price: "350,000" },
      { name: "Dashboard UI Design", price: "250,000" },
      { name: "Complete Product Design", price: "From 500,000" },
    ],
  },
  {
    key: "branding",
    label: "Branding & Digital",
    blurb: "The essentials that support a launch — identity, hosting, domains, email, SSL, SEO, and performance.",
    services: [
      { name: "Logo Design", price: "50,000" },
      { name: "Brand Identity Package", price: "500,000" },
      { name: "Business Email Setup", price: "40,000" },
      { name: "Domain Registration", price: "From 25,000 / year" },
      { name: "Web Hosting", price: "From 60,000 / year" },
      { name: "SSL Certificate Setup", price: "30,000" },
      { name: "Website Maintenance", price: "From 50,000 / month" },
      { name: "SEO Optimization", price: "From 200,000" },
      { name: "Website Speed Optimization", price: "120,000" },
    ],
  },
  {
    key: "additional",
    label: "Hourly & Add-Ons",
    blurb: "Support for work outside a fixed package — consultation, fixes, and integrations billed as needed.",
    services: [
      { name: "Software Consultation", price: "₦50,000 / hour" },
      { name: "Bug Fixing", price: "From ₦100,000" },
      { name: "API Integration", price: "From ₦200,000" },
      { name: "Payment Gateway Integration", price: "From ₦250,000" },
      { name: "Cloud Deployment", price: "From ₦200,000" },
      { name: "Data Migration", price: "From ₦150,000" },
    ],
  },
];

export interface MaintenancePlan {
  key: string;
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export const maintenancePlans: MaintenancePlan[] = [
  {
    key: "basic",
    name: "Basic",
    price: "₦50,000/mo",
    features: [
      "Monthly uptime & security checks",
      "Minor bug fixes",
      "Software & plugin updates",
      "Email support (48-hr response)",
    ],
  },
  {
    key: "standard",
    name: "Standard",
    price: "₦120,000/mo",
    highlighted: true,
    features: [
      "Everything in Basic",
      "Content & feature updates (up to 4hrs/mo)",
      "Performance optimisation",
      "Priority email & phone support (24-hr response)",
      "Monthly backup & report",
    ],
  },
  {
    key: "premium",
    name: "Premium",
    price: "₦250,000/mo",
    features: [
      "Everything in Standard",
      "Dedicated support contact",
      "Feature development (up to 10hrs/mo)",
      "Same-day priority response",
      "Quarterly strategy review",
    ],
  },
];

export const pricingTerms = [
  "A 60% deposit is required before work begins, with the remaining 40% due before final deployment and handover.",
  "Every project includes testing, deployment support, and a limited warranty period for bug fixes after launch.",
  "Third-party costs — domain, hosting, SMS/OTP credits, payment gateway fees, app store fees — are billed separately unless stated otherwise.",
  "Timelines are agreed at kickoff and depend on scope, content readiness, and feedback turnaround.",
  "Prices above are starting points — a free scoping consultation confirms the final quote before anything is signed.",
];
