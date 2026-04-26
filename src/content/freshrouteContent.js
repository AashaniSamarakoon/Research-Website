import pdfTAF from '../components/documents/TAF/TAF_25-26J-444.pdf'
import pdfProposalIT22124494 from '../components/documents/proposals/IT22124494-Proposal_Report_Final.pdf'
import pdfProposalIT22213730 from '../components/documents/proposals/IT22213730-Proposal_Report_Final.pdf'
import pdfProposalIT22230874 from '../components/documents/proposals/IT22230874-Proposal_Report_Final.pdf'
import pdfProposalIT22257154 from '../components/documents/proposals/IT22257154-Proposal_Report_Final.pdf'
import imgKarthiga from '../components/image/Academic Guidance/karthigar-1729408999.jpeg'
import imgPoojani from '../components/image/Academic Guidance/poojanig-1715838681.jpeg'

export const project = {
  name: 'FreshRoute',
  tagline: 'Smart Fruit Supply Chain Management',
  period: 'Final Year Research Project · 2024/25',
  highlights: ['AI/ML', 'Blockchain Traceability', 'Web Platform', 'Supply Chain Analytics'],
}

export const stats = [
  { value: '4', label: 'Group Members' },
  { value: '12+', label: 'Documents' },
  { value: '4+', label: 'Problems Identified' },
  { value: '92%', label: 'Testing Accuracy' },
  { value: '2', label: 'Supervisors' },
]

export const aboutCards = [
  {
    title: 'Our Mission',
    body: 'Reduce fruit waste and improve trust in the supply chain through verifiable traceability, smarter forecasting, and user-centred workflows.',
  },
  {
    title: 'Our Approach',
    body: 'Mixed-methods research: literature review, stakeholder interviews, iterative UI/UX design, and quantitative evaluation of models and system performance.',
  },
  {
    title: 'Our Domain',
    body: 'Farm-to-market fruit logistics, quality handling, provenance, compliance, and decision-support for farmers, collectors, and retailers.',
  },
  {
    title: 'Our Output',
    body: 'A working prototype, validated methodology, test evidence, comparison results, and a research paper draft for publication.',
  },
]

export const problems = [
  {
    severity: 'High',
    title: 'Limited traceability and low trust across stakeholders',
    body: 'Paper-based or siloed tracking makes provenance hard to prove, increases disputes, and reduces buyer confidence — especially for quality and handling claims.',
  },
  {
    severity: 'Medium',
    title: 'Inefficient coordination causes delays and post-harvest losses',
    body: 'Poor visibility into inventory, transport conditions, and demand leads to late decisions, spoilage risk, and missed market opportunities.',
  },
  {
    severity: 'Systemic',
    title: 'Weak benchmarking for comparing solutions and outcomes',
    body: 'Without a consistent evaluation framework, it’s difficult to compare alternative systems and justify adoption based on evidence.',
  },
]

export const methodologySteps = [
  {
    title: 'Literature Review & Gap Identification',
    body: 'Survey academic and industry work on traceability, perishable logistics, blockchain adoption barriers, and ML forecasting/quality analysis.',
  },
  {
    title: 'Stakeholder Interviews & Requirement Elicitation',
    body: 'Semi-structured interviews with farmers, collectors, transporters, and retailers to capture pain-points, constraints, and success metrics.',
  },
  {
    title: 'System & Data Design',
    body: 'Define entities, workflows, evidence artifacts, and data capture points for fruit batches, events, and verification checkpoints.',
  },
  {
    title: 'AI Module Development',
    body: 'Develop ML components for forecasting and/or quality-related insights using measurable datasets and repeatable evaluation.',
  },
  {
    title: 'Blockchain Traceability Layer',
    body: 'Model a tamper-evident event chain for key lifecycle events, focusing on integrity, auditability, and practical cost/complexity.',
  },
  {
    title: 'Testing, Evaluation & Reporting',
    body: 'Unit/integration testing, usability testing (SUS), performance benchmarking, and comparative analysis against existing alternatives.',
  },
]

export const researchComponents = [
  {
    id: 'demand-forecasting',
    title: 'AI-Based Demand and Price Forecasting ',
    body: 'Predicts fruit demand, pricing trends, and harvest timing using time-series and machine learning models to support data-driven decisions and reduce waste.',
    tags: ['LSTM', 'Prophet', 'SARIMA', 'Time Series'],
    keyPoints: [
      'Forecast daily/weekly demand by fruit type and market region.',
      'Estimate pricing trends from historical and seasonal signals.',
      'Support harvest timing decisions to reduce spoilage risk.',
    ],
    relatedDocIds: ['proposal-a'],
  },
  {
    id: 'blockchain-marketplace',
    title: 'Blockchain-Based Marketplace and Smart Contract System',
    body: 'Enables secure, transparent, and auditable transactions between farmers and buyers through a permissioned blockchain layer and escrow-based payments.',
    tags: ['Permissioned Blockchain', 'Escrow', 'Smart Contracts', 'Auditability'],
    keyPoints: [
      'Record batch lifecycle events for tamper-evident auditing.',
      'Use escrow-based settlement to reduce disputes and fraud.',
      'Support role-based access control for stakeholder privacy.',
    ],
    relatedDocIds: ['proposal-b'],
  },
  {
    id: 'logistics-optimization',
    title: 'Perishability-Aware Logistics Optimization',
    body: 'Optimizes transportation routes, vehicle allocation, and freshness preservation based on perishability, distance, and environmental conditions.',
    tags: ['Routing', 'Freshness', 'Constraints', 'Optimization'],
    keyPoints: [
      'Select routes and schedules to maximize freshness at delivery.',
      'Allocate vehicles with capacity and temperature constraints.',
      'Prioritize high-perishability loads to reduce post-harvest losses.',
    ],
    relatedDocIds: ['proposal-c'],
  },
  {
    id: 'quality-verification',
    title: 'AI-Based Quality Verification and Complaint Validation',
    body: 'Uses computer vision and image analysis to assess fruit quality, validate complaints, and detect duplicate or manipulated evidence.',
    tags: ['Computer Vision', 'Image Analysis', 'Fraud Detection', 'Quality'],
    keyPoints: [
      'Assess quality indicators (e.g., bruising, discoloration) from images.',
      'Validate complaints using evidence checks and similarity detection.',
      'Detect duplicate/manipulated submissions to reduce abuse.',
    ],
    relatedDocIds: ['proposal-d'],
  },
]

export const teamMembers = [
  {
    id: 'member-a',
    initials: 'AS',
    name: 'A. D. Samarakoon',
    componentId: 'demand-forecasting',
    bio: 'Focuses on the AI demand forecasting research component and the end-to-end research methodology and reporting.',
  },
  {
    id: 'member-b',
    initials: 'ND',
    name: 'N. A. Dias',
    componentId: 'blockchain-marketplace',
    bio: 'Focuses on the blockchain marketplace and smart-contract research component, including trust, auditability, and user workflows.',
  },
  {
    id: 'member-c',
    initials: 'SG',
    name: 'S. C. Gallearachchi',
    componentId: 'logistics-optimization',
    bio: 'Focuses on perishability-aware logistics optimization research, covering routing constraints and freshness preservation strategies.',
  },
  {
    id: 'member-d',
    initials: 'WD',
    name: 'W. S. R. Dayarathna',
    componentId: 'quality-verification',
    bio: 'Focuses on AI-based quality verification and complaint validation research using image analysis and evidence integrity checks.',
  },
]

export const supervisors = [
  {
    id: 'supervisor',
    initials: 'KR',
    name: 'Ms. Karthiga Rajendran',
    title: 'Lecturer | Department of Software Engineering | Faculty of Computing',
    email: 'karthiga.r@sliit.lk',
    body: 'Guides research direction, methodology quality, and evaluation rigor; supports publication readiness and academic alignment.',
    tags: ['Systems', 'HCI'],
    photo: imgKarthiga,
  },
  {
    id: 'co-supervisor',
    initials: 'PG',
    name: 'Ms. Poojani Gunathilake',
    title: 'Lecturer | Department of Software Engineering | Faculty of Computing',
    email: 'poojani.g@sliit.lk',
    body: 'Provides AI/ML and data analysis guidance, helps validate metrics, and reviews quantitative results and reporting.',
    tags: ['AI/ML', 'Data Science'],
    photo: imgPoojani,
  },
]

export const documents = [
  {
    id: 'taf',
    category: 'taf',
    title: 'Topic Approval Form (TAF)',
    meta: 'Submitted · Group · April 2024',
    badge: 'TAF',
    href: pdfTAF,
    provided: true,
  },
  {
    id: 'proposal-group',
    category: 'proposals',
    title: 'Research Proposal — Full Group',
    meta: 'Approved · Group · May 2024',
    badge: 'Proposal',
    href: null,
    provided: false,
  },
  {
    id: 'proposal-a',
    category: 'proposals',
    title: 'Individual Proposal — AI-Based Demand Forecasting',
    meta: 'Submitted · Individual · May 2024',
    badge: 'Individual',
    href: pdfProposalIT22124494,
    provided: true,
  },
  {
    id: 'proposal-b',
    category: 'proposals',
    title: 'Individual Proposal — Blockchain Marketplace & Smart Contracts',
    meta: 'Submitted · Individual · May 2024',
    badge: 'Individual',
    href: pdfProposalIT22213730,
    provided: true,
  },
  {
    id: 'proposal-c',
    category: 'proposals',
    title: 'Individual Proposal — Perishability-Aware Logistics Optimization',
    meta: 'Submitted · Individual · May 2024',
    badge: 'Individual',
    href: pdfProposalIT22230874,
    provided: true,
  },
  {
    id: 'proposal-d',
    category: 'proposals',
    title: 'Individual Proposal — AI Quality Verification & Complaint Validation',
    meta: 'Submitted · Individual · May 2024',
    badge: 'Individual',
    href: pdfProposalIT22257154,
    provided: true,
  },
  {
    id: 'progress-1',
    category: 'reports',
    title: 'Progress Report — Phase 1',
    meta: 'Submitted · Group · July 2024',
    badge: 'Report',
    href: null,
    provided: false,
  },
  {
    id: 'lit-review',
    category: 'reports',
    title: 'Literature Review Report',
    meta: 'Submitted · Group · June 2024',
    badge: 'Report',
    href: null,
    provided: false,
  },
  {
    id: 'final-report',
    category: 'reports',
    title: 'Final Research Report',
    meta: 'In Progress · Group · Dec 2024',
    badge: 'Report',
    href: null,
    provided: false,
  },
  {
    id: 'interviews',
    category: 'other',
    title: 'Interview Transcripts (Full Set)',
    meta: 'Qualitative Data · 20 interviews',
    badge: 'Interview',
    href: null,
    provided: false,
  },
]

export const uiDesigns = [
  {
    title: 'Dashboard — Main View',
    version: 'v3.0 — Final',
    tag: 'High-Fi',
  },
  {
    title: 'Batch Data Entry Form',
    version: 'v2.1 — Approved',
    tag: 'Wireframe',
  },
  {
    title: 'Reports & Analytics',
    version: 'v1.5 — Testing',
    tag: 'Prototype',
  },
]

export const interviews = [
  {
    quote:
      'We lose visibility once the fruit leaves the farm. If provenance and handling were recorded properly, buyer trust would improve immediately.',
    who: 'Participant 04 · Collector · Interview Round 1',
  },
  {
    quote:
      'We need better demand insight. When we ship the wrong quantity, we either waste fruit or miss sales.',
    who: 'Participant 11 · Retailer · Interview Round 2',
  },
  {
    quote:
      'A tamper-evident record of events would reduce disputes. Right now, everything is “he said, she said”.',
    who: 'Participant 17 · Transport Coordinator · Interview Round 2',
  },
  {
    quote:
      'The prototype makes the workflow clearer. If it stays simple, teams will actually use it.',
    who: 'Participant 20 · Industry Practitioner · Validation Session',
  },
]

export const testing = {
  metrics: [
    { value: '92%', label: 'Test Pass Rate' },
    { value: '78.5', label: 'SUS Usability Score' },
    { value: '1.2s', label: 'Avg Response Time' },
    { value: '30', label: 'Usability Participants' },
  ],
  phases: [
    'Unit Testing — core modules',
    'Integration Testing — end-to-end batch tracking',
    'Usability Testing — task completion + SUS',
    'Performance Testing — load/latency benchmarks',
    'Expert Review — supervisor + domain feedback',
    'UAT — in progress',
  ],
  findings: [
    'Most users completed core tasks without assistance during moderated sessions.',
    'Performance benchmarks improved over baseline workflows in typical scenarios.',
  ],
}

export const comparisonRows = [
  {
    criteria: 'Traceability / Provenance',
    a: 'Limited',
    b: 'Partial',
    os: 'Varies',
    ours: 'Strong (event chain)',
  },
  {
    criteria: 'AI-assisted Insights',
    a: 'None',
    b: 'Basic',
    os: 'Basic',
    ours: 'Forecasting + analytics',
  },
  {
    criteria: 'Usability (SUS)',
    a: '51',
    b: '63',
    os: '58',
    ours: '78.5',
  },
  {
    criteria: 'Mobile Responsive',
    a: 'No',
    b: 'No',
    os: 'Partial',
    ours: 'Yes',
  },
]

export const paper = {
  statusBadge: 'Pre-Publication Draft',
  title:
    'FreshRoute: An AI + Blockchain Approach for Smart Fruit Supply Chain Management',
  authors: 'Ashani Samarakoon, N. A. Dias, S. C. Gallearachchi, W. S. R. Dayarathna',
  org: 'Your University Name',
  year: '2024',
  target: 'Target: IEEE / ACM / Springer',
  abstract:
    'This paper presents FreshRoute, a research-driven approach to improving fruit supply chain efficiency and trust using AI-assisted insights and a blockchain-inspired traceability layer. Using mixed-methods research, stakeholder interviews, iterative UI/UX design, and multi-phase evaluation, we demonstrate measurable improvements in usability and operational visibility compared to baseline practices. The study contributes a practical evaluation framework and implementation guidelines for real-world adoption.',
  downloadHref: '/docs/placeholder.pdf',
}

export const commercialization = {
  poster: {
    src: '/media/freshroute-business-poster.png',
    alt: 'FreshRoute business poster',
  },
  businessAccounts: [
    {
      label: 'Facebook (Business)',
      handle: '@freshroute',
      href: 'https://facebook.com/',
    },
    {
      label: 'Instagram (Business)',
      handle: '@freshroute',
      href: 'https://instagram.com/',
    },
    {
      label: 'Business Email',
      handle: 'business@your-domain.com',
      href: 'mailto:business@your-domain.com',
    },
  ],
  pro: {
    title: 'FreshRoute Pro (Upcoming)',
    body: 'An upcoming business-ready version focused on advanced analytics, automation, and smoother onboarding for farmers, collectors, and retailers.',
    bullets: [
      'Role-based onboarding and organization accounts',
      'Advanced dashboards and reporting for stakeholders',
      'Automation for batch events and dispute workflows',
    ],
  },
}

export const contact = {
  generalEmail: 'freshroute@your-domain.com',
  hotline: {
    label: 'FreshRoute Hotline',
    phone: '+94 XX XXX XXXX',
  },
  phone: {
    label: 'Main Contact Number',
    phone: '+94 XX XXX XXXX',
  },
  teamEmails: [
    'member1@your-domain.com',
    'member2@your-domain.com',
    'member3@your-domain.com',
    'member4@your-domain.com',
  ],
}
