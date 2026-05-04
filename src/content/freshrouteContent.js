import pdfTAF from "../components/documents/TAF/TAF_25-26J-444.pdf";
import pdfProposalIT22124494 from "../components/documents/proposals/IT22124494-Proposal_Report_Final.pdf";
import pdfProposalIT22213730 from "../components/documents/proposals/IT22213730-Proposal_Report_Final.pdf";
import pdfProposalIT22230874 from "../components/documents/proposals/IT22230874-Proposal_Report_Final.pdf";
import pdfProposalIT22257154 from "../components/documents/proposals/IT22257154-Proposal_Report_Final.pdf";
import pdfFinalGroup from "../components/documents/final_reports/Group_Thesis_Report_Draft.pdf";
import pdfFinalIT22124494 from "../components/documents/final_reports/IT22124494-Thesis_Report_Draft.pdf";
import pdfFinalIT22213730 from "../components/documents/final_reports/IT22213730-Thesis_Report_Draft.pdf";
import pdfFinalIT22230874 from "../components/documents/final_reports/IT22230874-Thesis_Report_Draft.pdf";
import pdfFinalIT22257154 from "../components/documents/final_reports/IT22257154-Thesis_Report_Draft.pdf";
import pdfResearchPaper from "../components/documents/research_paper/FreshRoute Research Paper.pdf";
import imgKarthiga from "../components/image/Academic Guidance/karthigar-1729408999.jpeg";
import imgPoojani from "../components/image/Academic Guidance/poojanig-1715838681.jpeg";
import imgInterview1 from "../components/image/interview/interview1.png";
import imgInterview2 from "../components/image/interview/interview2.png";
import imgInterview3 from "../components/image/interview/interview3.png";
import imgInterview4 from "../components/image/interview/interview4.jpeg";
import videoInterview from "../components/image/interview/interview_video.mp4";
import imgUi1 from "../components/image/ui/ui1.png";
import imgUi2 from "../components/image/ui/ui2.png";

const presentationSlideModules = import.meta.glob(
  "../components/documents/Presentation slides/*.pdf",
  { eager: true, import: "default" },
);

function normalizePresentationTitle(fileBaseName) {
  const trimmed = String(fileBaseName).trim();
  const normalized = trimmed.replace(/[_-]+/g, " ").replace(/\s+/g, " ");

  if (/proposal/i.test(normalized)) return "Proposal Presentation";
  if (/\bpp\s*1\b/i.test(normalized) || /progress\s*1/i.test(normalized)) {
    return "Progress Presentation 1";
  }
  if (/\bpp\s*2\b/i.test(normalized) || /progress\s*2/i.test(normalized)) {
    return "Progress Presentation 2";
  }
  if (/final/i.test(normalized)) return "Final Presentation";

  return normalized.replace(/\bpresentation\b/i, "").trim();
}

function rankPresentationTitle(title) {
  if (title === "Proposal Presentation") return 0;
  if (title === "Progress Presentation 1") return 1;
  if (title === "Progress Presentation 2") return 2;
  if (title === "Final Presentation") return 3;
  return 99;
}

const presentationSlideDocs = Object.entries(presentationSlideModules)
  .map(([path, href]) => {
    const fileName = path.split("/").pop() ?? "";
    const baseName = fileName.replace(/\.pdf$/i, "");
    const title = normalizePresentationTitle(baseName);
    const id = `slide-${baseName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`;

    return {
      id,
      category: "reports",
      title,
      meta: "Submitted · Group",
      badge: "Presentation",
      href,
      provided: true,
    };
  })
  .sort(
    (a, b) =>
      rankPresentationTitle(a.title) - rankPresentationTitle(b.title) ||
      a.title.localeCompare(b.title),
  );

export const project = {
  name: "FreshRoute",
  tagline: "Smart Fruit Supply Chain Management",
  period: "Final Year Research Project · 2024/25",
  highlights: [
    "AI/ML",
    "Blockchain Traceability",
    "Mobile Platform",
    "Supply Chain",
  ],
};

export const stats = [
  { value: "4", label: "Group Members" },
  { value: "13", label: "Documents" },
  { value: "4+", label: "Problems Identified" },
  { value: "92%", label: "Testing Accuracy" },
  { value: "2", label: "Supervisors" },
];

export const aboutCards = [
  {
    title: "Our Mission",
    body: "Reduce fruit waste and improve trust in the supply chain through verifiable traceability, smarter forecasting, and user-centred workflows.",
  },
  {
    title: "Our Approach",
    body: "Mixed-methods research: literature review, stakeholder interviews, iterative UI/UX design, and quantitative evaluation of models and system performance.",
  },
  {
    title: "Our Domain",
    body: "Farm-to-market fruit logistics, quality handling, provenance, compliance, and decision-support for farmers, collectors, and retailers.",
  },
  {
    title: "Our Output",
    body: "A working prototype, validated methodology, test evidence, comparison results, and a research paper draft for publication.",
  },
];

export const problems = [
  {
    severity: "High",
    title: "Limited traceability and low trust across stakeholders",
    body: "Paper-based or siloed tracking makes provenance hard to prove, increases disputes, and reduces buyer confidence, especially for quality and handling claims.",
  },
  {
    severity: "Medium",
    title: "Inefficient coordination causes delays and post-harvest losses",
    body: "Poor visibility into inventory, transport conditions, and demand leads to late decisions, spoilage risk, and missed market opportunities.",
  },
  {
    severity: "Systemic",
    title: "Weak benchmarking for comparing solutions and outcomes",
    body: "Without a consistent evaluation framework, it is difficult to compare alternative systems and justify adoption based on evidence.",
  },
];

export const methodologySteps = [
  {
    title: "Literature Review & Gap Identification",
    body: "Survey academic and industry work on traceability, perishable logistics, blockchain adoption barriers, and ML forecasting and quality analysis.",
  },
  {
    title: "Stakeholder Interviews & Requirement Elicitation",
    body: "Semi-structured interviews with farmers, collectors, transporters, and retailers to capture pain-points, constraints, and success metrics.",
  },
  {
    title: "System & Data Design",
    body: "Define entities, workflows, evidence artifacts, and data capture points for fruit batches, events, and verification checkpoints.",
  },
  {
    title: "AI Module Development",
    body: "Develop ML components for forecasting and quality-related insights using measurable datasets and repeatable evaluation.",
  },
  {
    title: "Blockchain Traceability Layer",
    body: "Model a tamper-evident event chain for key lifecycle events, focusing on integrity, auditability, and practical cost and complexity.",
  },
  {
    title: "Testing, Evaluation & Reporting",
    body: "Unit and integration testing, usability testing (SUS), performance benchmarking, and comparative analysis against existing alternatives.",
  },
];

export const researchComponents = [
  {
    id: "demand-forecasting",
    title: "AI-Based Demand and Price Forecasting",
    body: "Predicts fruit demand, pricing trends, and harvest timing using time-series and machine learning models to support data-driven decisions and reduce waste.",
    tags: ["LSTM", "Prophet", "SARIMA", "Time Series"],
    keyPoints: [
      "Forecast daily and weekly demand by fruit type and market region.",
      "Estimate pricing trends from historical and seasonal signals.",
      "Support harvest timing decisions to reduce spoilage risk.",
    ],
    relatedDocIds: ["proposal-a", "final-report-a"],
  },
  {
    id: "blockchain-marketplace",
    title: "Blockchain-Based Marketplace and Smart Contract System",
    body: "Enables secure, transparent, and auditable transactions between farmers and buyers through a permissioned blockchain layer and escrow-based payments.",
    tags: [
      "Permissioned Blockchain",
      "Escrow",
      "Smart Contracts",
      "Auditability",
    ],
    keyPoints: [
      "Record batch lifecycle events for tamper-evident auditing.",
      "Use escrow-based settlement to reduce disputes and fraud.",
      "Support role-based access control for stakeholder privacy.",
    ],
    relatedDocIds: ["proposal-b", "final-report-b"],
  },
  {
    id: "logistics-optimization",
    title: "Perishability-Aware Logistics Optimization",
    body: "Optimizes transportation routes, vehicle allocation, and freshness preservation based on perishability, distance, and environmental conditions.",
    tags: ["Routing", "Freshness", "Constraints", "Optimization"],
    keyPoints: [
      "Select routes and schedules to maximize freshness at delivery.",
      "Allocate vehicles with capacity and temperature constraints.",
      "Prioritize high-perishability loads to reduce post-harvest losses.",
    ],
    relatedDocIds: ["proposal-c", "final-report-c"],
  },
  {
    id: "quality-verification",
    title: "AI-Based Quality Verification and Complaint Validation",
    body: "Uses computer vision and image analysis to assess fruit quality, validate complaints, and detect duplicate or manipulated evidence.",
    tags: ["Computer Vision", "Image Analysis", "Fraud Detection", "Quality"],
    keyPoints: [
      "Assess quality indicators such as bruising and discoloration from images.",
      "Validate complaints using evidence checks and similarity detection.",
      "Detect duplicate or manipulated submissions to reduce abuse.",
    ],
    relatedDocIds: ["proposal-d", "final-report-d"],
  },
];

export const teamMembers = [
  {
    id: "member-a",
    initials: "AS",
    name: "A. D. Samarakoon",
    componentId: "demand-forecasting",
    bio: "Focuses on the AI demand forecasting research component and the end-to-end research methodology and reporting.",
  },
  {
    id: "member-b",
    initials: "ND",
    name: "N. A. Dias",
    componentId: "blockchain-marketplace",
    bio: "Focuses on the blockchain marketplace and smart-contract research component, including trust, auditability, and user workflows.",
  },
  {
    id: "member-c",
    initials: "SG",
    name: "S. C. Gallearachchi",
    componentId: "logistics-optimization",
    bio: "Focuses on perishability-aware logistics optimization research, covering routing constraints and freshness preservation strategies.",
  },
  {
    id: "member-d",
    initials: "WD",
    name: "W. S. R. Dayarathna",
    componentId: "quality-verification",
    bio: "Focuses on AI-based quality verification and complaint validation research using image analysis and evidence integrity checks.",
  },
];

export const supervisors = [
  {
    id: "supervisor",
    initials: "KR",
    name: "Ms. Karthiga Rajendran",
    title:
      "Lecturer | Department of Software Engineering | Faculty of Computing",
    email: "karthiga.r@sliit.lk",
    body: "Guides research direction, methodology quality, and evaluation rigor; supports publication readiness and academic alignment.",
    tags: ["Systems", "HCI"],
    photo: imgKarthiga,
  },
  {
    id: "co-supervisor",
    initials: "PG",
    name: "Ms. Poojani Gunathilake",
    title:
      "Lecturer | Department of Software Engineering | Faculty of Computing",
    email: "poojani.g@sliit.lk",
    body: "Provides AI/ML and data analysis guidance, helps validate metrics, and reviews quantitative results and reporting.",
    tags: ["AI/ML", "Data Science"],
    photo: imgPoojani,
  },
];

export const documents = [
  {
    id: "taf",
    category: "taf",
    title: "Topic Approval Form (TAF)",
    meta: "Submitted · Group",
    badge: "TAF",
    href: pdfTAF,
    provided: true,
  },
  {
    id: "proposal-a",
    category: "proposals",
    title: "Individual Proposal - AI-Based Demand Forecasting",
    meta: "Submitted · Individual",
    badge: "Individual",
    href: pdfProposalIT22124494,
    provided: true,
  },
  {
    id: "proposal-b",
    category: "proposals",
    title: "Individual Proposal - Blockchain Marketplace & Smart Contracts",
    meta: "Submitted · Individual",
    badge: "Individual",
    href: pdfProposalIT22213730,
    provided: true,
  },
  {
    id: "proposal-c",
    category: "proposals",
    title: "Individual Proposal - Perishability-Aware Logistics Optimization",
    meta: "Submitted · Individual",
    badge: "Individual",
    href: pdfProposalIT22230874,
    provided: true,
  },
  {
    id: "proposal-d",
    category: "proposals",
    title:
      "Individual Proposal - AI Quality Verification & Complaint Validation",
    meta: "Submitted · Individual",
    badge: "Individual",
    href: pdfProposalIT22257154,
    provided: true,
  },
  ...presentationSlideDocs,
  {
    id: "final-report-group",
    category: "reports",
    title: "Final Thesis Report - Group",
    meta: "Submitted · Group",
    badge: "Final Report",
    href: pdfFinalGroup,
    provided: true,
  },
  {
    id: "final-report-a",
    category: "reports",
    title: "Final Thesis Report - AI-Based Demand Forecasting",
    meta: "Submitted · Individual",
    badge: "Final Report",
    href: pdfFinalIT22124494,
    provided: true,
  },
  {
    id: "final-report-b",
    category: "reports",
    title: "Final Thesis Report - Blockchain Marketplace & Smart Contracts",
    meta: "Submitted · Individual",
    badge: "Final Report",
    href: pdfFinalIT22213730,
    provided: true,
  },
  {
    id: "final-report-c",
    category: "reports",
    title: "Final Thesis Report - Perishability-Aware Logistics Optimization",
    meta: "Submitted · Individual",
    badge: "Final Report",
    href: pdfFinalIT22230874,
    provided: true,
  },
  {
    id: "final-report-d",
    category: "reports",
    title:
      "Final Thesis Report - AI Quality Verification & Complaint Validation",
    meta: "Submitted · Individual",
    badge: "Final Report",
    href: pdfFinalIT22257154,
    provided: true,
  },
  {
    id: "research-paper",
    category: "other",
    title: "FreshRoute Research Paper",
    meta: "Pre-publication draft · Group",
    badge: "Paper",
    href: pdfResearchPaper,
    provided: true,
  },
];

export const uiDesigns = [
  {
    title: "Dashboard - Main View",
    version: "UI 01",
    tag: "High-Fi",
    image: imgUi1,
    alt: "FreshRoute dashboard main view",
  },
  {
    title: "Batch Data Entry Form",
    version: "UI 02",
    tag: "Screen",
    image: imgUi2,
    alt: "FreshRoute batch data entry form",
  },
];

export const uiDemo = {
  label: "UI/UX Demo Video",
  href: "https://mysliit.sharepoint.com/:v:/s/CDAPSubmissionCloud/IQCZKapeV-mZSqw6pBcpPjt6AVxwrOseefTsL2Ae1Va_qPU?e=OhJHsD",
};

export const interviews = [
  {
    quote:
      "We lose visibility once the fruit leaves the farm. If provenance and handling were recorded properly, buyer trust would improve immediately.",
    who: "Participant 04 · Collector · Interview Round 1",
  },
  {
    quote:
      "We need better demand insight. When we ship the wrong quantity, we either waste fruit or miss sales.",
    who: "Participant 11 · Retailer · Interview Round 2",
  },
  {
    quote:
      "A tamper-evident record of events would reduce disputes. Right now, everything is he said, she said.",
    who: "Participant 17 · Transport Coordinator · Interview Round 2",
  },
  {
    quote:
      "The prototype makes the workflow clearer. If it stays simple, teams will actually use it.",
    who: "Participant 20 · Industry Practitioner · Validation Session",
  },
];

export const interviewMedia = {
  video: {
    src: videoInterview,
    poster: imgInterview1,
    title: "Interview field visit video",
  },
  slides: [
    {
      src: imgInterview1,
      alt: "FreshRoute interview session photo 1",
    },
    {
      src: imgInterview2,
      alt: "FreshRoute interview session photo 2",
    },
    {
      src: imgInterview3,
      alt: "FreshRoute interview session photo 3",
    },
    {
      src: imgInterview4,
      alt: "FreshRoute interview session photo 4",
    },
  ],
};

export const testing = {
  metrics: [
    { value: "92%", label: "Test Pass Rate" },
    { value: "78.5", label: "SUS Usability Score" },
    { value: "1.2s", label: "Avg Response Time" },
    { value: "30", label: "Usability Participants" },
  ],
  phases: [
    "Unit Testing - core modules",
    "Integration Testing - end-to-end batch tracking",
    "Performance Testing - load and latency benchmarks",
    "Expert Review - supervisor and domain feedback",
    "UAT - real user testing with farmers, buyers, and transporters",
  ],
  findings: [
    "Most users completed core tasks without assistance during moderated sessions.",
    "Performance benchmarks improved over baseline workflows in typical scenarios.",
  ],
  download: {
    title: "Testing Excel Sheet",
    href: "https://mysliit-my.sharepoint.com/:x:/g/personal/it22124494_my_sliit_lk/IQCaTXN8SAtQTbjTkO26bpDzAUfF8WqdvEK5ktIa2b9d0F0?e=dXhGuy",
  },
};

export const comparisonRows = [
  {
    criteria: "Traceability / Provenance",
    a: "Limited",
    b: "Partial",
    os: "Varies",
    ours: "Strong (event chain)",
  },
  {
    criteria: "AI-assisted Insights",
    a: "None",
    b: "Basic",
    os: "Basic",
    ours: "Forecasting + analytics",
  },
  {
    criteria: "Usability",
    a: "51",
    b: "63",
    os: "58",
    ours: "78.5",
  },
  {
    criteria: "Mobile Responsive",
    a: "No",
    b: "No",
    os: "Partial",
    ours: "Yes",
  },
];

export const paper = {
  statusBadge: "Pre-Publication Draft",
  title:
    "FreshRoute: An AI + Blockchain Approach for Smart Fruit Supply Chain Management",
  authors:
    "Ashani Samarakoon, N. A. Dias, S. C. Gallearachchi, W. S. R. Dayarathna",
  org: "Sri Lanka Institute of Information Technology (SLIIT)",
  year: "2024",
  target: "Target: IEEE / ACM / Springer",
  abstract:
    "This paper presents FreshRoute, a research-driven approach to improving fruit supply chain efficiency and trust using AI-assisted insights and a blockchain-inspired traceability layer. Using mixed-methods research, stakeholder interviews, iterative UI/UX design, and multi-phase evaluation, we demonstrate measurable improvements in usability and operational visibility compared to baseline practices. The study contributes a practical evaluation framework and implementation guidelines for real-world adoption.",
  downloadHref: pdfResearchPaper,
};

export const domain = {
  literatureSurvey:
    "We reviewed recent research on perishable supply chain traceability, post-harvest loss reduction, blockchain adoption constraints, and AI/ML methods for demand forecasting and quality assessment.",
  researchGap:
    "Existing solutions typically address traceability or prediction in isolation, with limited end-to-end evidence capture and inconsistent evaluation criteria across stakeholders.",
  researchProblem:
    "How can a fruit supply chain platform provide trustworthy, auditable traceability while also delivering actionable AI-assisted insights — without making workflows too complex for real operations?",
  researchObjectives: [
    "Design a practical evidence trail for fruit batch lifecycle events.",
    "Develop AI-based forecasting and quality-verification components to reduce waste and disputes.",
    "Validate usability and performance through testing and stakeholder feedback.",
    "Provide structured comparison criteria for evaluating outcomes.",
  ],
  methodologyNote:
    "The study follows a mixed-methods approach (literature + interviews + iterative design + quantitative evaluation).",
  technologiesUsed: [
    "React Native",
    "Node.js",
    "PostgreSQL",
    "AI/ML (time-series + computer vision)",
    "Blockchain (permissioned)",
    "IoT",
    "Agile Methodology",
  ],
};

export const milestones = [
  {
    id: "proposal",
    title: "Project Proposal",
    date: "09/11/2025",
    marks: "Not Visible For Students",
    status: "Completed",
    description:
      "Submission of the project proposal including problem statement, objectives, scope, and initial methodology.",
  },
  {
    id: "pp1",
    title: "Progress Presentation 1",
    date: "01/07/2025",
    marks: "Mix Level Mark is Exellent For all Group Members",
    status: "Completed",
    description:
      "First progress checkpoint covering literature findings, requirement elicitation, and initial prototype progress.",
  },
  {
    id: "pp2",
    title: "Progress Presentation 2",
    date: "11/03/2026",
    marks: "Not Visible For Students",
    status: "Completed",
    description:
      "Second progress checkpoint covering implementation maturity, testing plan, and interim evaluation results.",
  },
  {
    id: "final",
    title: "Final Presentation and Viva",
    date: "05/05/2026",
    marks: "Soon",
    status: "Planned",
    description:
      "Final submission and evaluation including the full system, documentation, testing evidence, and research paper.",
  },
];

export const contact = {
  generalEmail: "contact@freshroute.lk",
  phone: {
    label: "Main Contact Number",
    phone: "0703101244",
  },
  teamEmails: [
    "it22124494@my.sliit.lk",
    "it22213730@my.sliit.lk",
    "it22230874@my.sliit.lk",
    "it22257154@my.sliit.lk",
  ],
};

export const commercialization = {
  poster: {
    src: "/media/freshroute-business-poster.png",
    alt: "FreshRoute business poster",
  },
  businessAccounts: [
    {
      label: "Facebook",
      handle: "facebook.com/profile.php?id=61564798541333",
      href: "https://web.facebook.com/profile.php?id=61564798541333",
    },
    {
      label: "Official Website",
      handle: "www.freshroute.lk",
      href: "https://www.freshroute.lk/",
    },
    {
      label: "Business Email",
      handle: "contact@freshroutes.lk",
      href: "mailto:contact@freshroutes.lk",
    },
  ],
  pro: {
    title: "FreshRoute Pro (Upcoming)",
    body: "An upcoming business-ready version focused on advanced analytics, automation, and smoother onboarding for farmers, collectors, and retailers.",
    bullets: [
      "Role-based onboarding and organization accounts",
      "Advanced dashboards and reporting for stakeholders",
      "Automation for batch events and dispute workflows",
    ],
  },
};
