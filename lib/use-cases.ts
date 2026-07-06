export type UseCaseCategory = "ai-enablement" | "ai-operations" | "ai-experience";

export type ChartKind = "bar" | "area" | "donut" | "progress";

export type ChartDatum = { label: string; value: number };

export type UseCaseChart = {
  kind: ChartKind;
  data: ChartDatum[];
  caption: string;
};

export type UseCase = {
  id: string;
  category: UseCaseCategory;
  title: string;
  description: string;
  status?: "live" | "pilot" | "planned";
  impact?: string;
  owner?: string;
  href?: string;
  metric: string;
  metricLabel: string;
  delta?: { value: string; direction: "up" | "down" };
  chart: UseCaseChart;
};

export type Category = {
  id: UseCaseCategory;
  label: string;
  accent: string;
};

export const CATEGORIES: Category[] = [
  { id: "ai-enablement", label: "AI Enablement", accent: "#1c6cc8" },
  { id: "ai-operations", label: "AI Operations", accent: "#0e7a5f" },
  { id: "ai-experience", label: "AI Experience", accent: "#4f46e5" },
];

export const DISCLAIMER =
  "Metrics shown are illustrative placeholders. Replace with figures from your program reporting.";

export const HERO = {
  eyebrow: "AI Opportunity Brief · 2026",
  title: "Explore AI Opportunities Across Your Business",
  subtitle:
    "A working inventory of where AI is already creating measurable value across corporate IT and infrastructure — and where the next opportunities sit. Select any card to turn it over and see the impact behind the use case.",
  impactStat: "$14M+",
};

export const USE_CASES: UseCase[] = [
  {
    id: "ai-enablement-1",
    category: "ai-enablement",
    title: "Enterprise AI Literacy Program",
    description:
      "Company-wide training curriculum to build foundational AI skills across all business units.",
    status: "live",
    impact: "2,400+ employees trained",
    owner: "Learning & Development",
    metric: "2,400+",
    metricLabel: "Employees trained",
    delta: { value: "35%", direction: "up" },
    chart: {
      kind: "area",
      data: [
        { label: "Q1", value: 420 },
        { label: "Q2", value: 890 },
        { label: "Q3", value: 1540 },
        { label: "Q4", value: 2400 },
      ],
      caption: "Cumulative employees trained",
    },
  },
  {
    id: "ai-enablement-2",
    category: "ai-enablement",
    title: "AI Center of Excellence",
    description:
      "Central hub providing best practices, tooling guidance, and governance for AI initiatives.",
    status: "live",
    owner: "Chief AI Office",
    metric: "120",
    metricLabel: "Initiatives supported",
    delta: { value: "45%", direction: "up" },
    chart: {
      kind: "bar",
      data: [
        { label: "Q1", value: 18 },
        { label: "Q2", value: 26 },
        { label: "Q3", value: 34 },
        { label: "Q4", value: 42 },
      ],
      caption: "Initiatives supported per quarter",
    },
  },
  {
    id: "ai-enablement-3",
    category: "ai-enablement",
    title: "Responsible AI Framework",
    description:
      "Policies and review processes ensuring ethical, transparent, and compliant AI deployment.",
    status: "live",
    impact: "100% of production models reviewed",
    owner: "Legal & Compliance",
    metric: "100%",
    metricLabel: "Production models reviewed",
    delta: { value: "12%", direction: "up" },
    chart: {
      kind: "progress",
      data: [
        { label: "Reviewed", value: 100 },
        { label: "Documented", value: 92 },
        { label: "Audit-ready", value: 88 },
      ],
      caption: "Model governance vs. policy baseline",
    },
  },
  {
    id: "ai-enablement-4",
    category: "ai-enablement",
    title: "Self-Service Model Registry",
    description:
      "Centralized catalog of approved models, datasets, and prompts available to teams.",
    status: "pilot",
    owner: "Platform Engineering",
    metric: "85",
    metricLabel: "Approved models cataloged",
    delta: { value: "2.1x", direction: "up" },
    chart: {
      kind: "donut",
      data: [{ label: "of teams onboarded to the registry", value: 62 }],
      caption: "62% of engineering teams onboarded",
    },
  },
  {
    id: "ai-enablement-5",
    category: "ai-enablement",
    title: "Prompt Engineering Toolkit",
    description:
      "Shared library of tested prompts and templates to accelerate AI adoption across teams.",
    status: "live",
    impact: "50% faster prompt iteration",
    owner: "AI Platform Team",
    metric: "50%",
    metricLabel: "Faster prompt iteration",
    delta: { value: "50%", direction: "up" },
    chart: {
      kind: "area",
      data: [
        { label: "Q1", value: 320 },
        { label: "Q2", value: 610 },
        { label: "Q3", value: 980 },
        { label: "Q4", value: 1450 },
      ],
      caption: "Weekly toolkit uses (trailing average)",
    },
  },
  {
    id: "ai-enablement-6",
    category: "ai-enablement",
    title: "AI Vendor Evaluation Portal",
    description:
      "Standardized scoring and procurement workflow for evaluating third-party AI solutions.",
    status: "pilot",
    owner: "Procurement & IT",
    metric: "22 days",
    metricLabel: "Faster vendor assessment",
    delta: { value: "35%", direction: "down" },
    chart: {
      kind: "bar",
      data: [
        { label: "FY23", value: 64 },
        { label: "FY24", value: 51 },
        { label: "FY25", value: 42 },
      ],
      caption: "Avg evaluation time by fiscal year (days)",
    },
  },
  {
    id: "ai-enablement-7",
    category: "ai-enablement",
    title: "Executive AI Briefings",
    description:
      "Quarterly leadership sessions covering AI trends, portfolio updates, and strategic opportunities.",
    status: "live",
    owner: "Strategy Office",
    metric: "96%",
    metricLabel: "Leadership engagement score",
    delta: { value: "9 pts", direction: "up" },
    chart: {
      kind: "progress",
      data: [
        { label: "Attendance", value: 96 },
        { label: "Satisfaction", value: 92 },
        { label: "Follow-ups actioned", value: 81 },
      ],
      caption: "Engagement across last 4 briefings",
    },
  },
  {
    id: "ai-operations-1",
    category: "ai-operations",
    title: "Automated Invoice Processing",
    description:
      "AI extracts and validates invoice data, reducing manual data entry and processing time.",
    status: "live",
    impact: "40% reduction in processing time",
    owner: "Finance Operations",
    metric: "$4.2M",
    metricLabel: "Annualized savings",
    delta: { value: "40%", direction: "up" },
    chart: {
      kind: "bar",
      data: [
        { label: "FY22", value: 0.8 },
        { label: "FY23", value: 1.6 },
        { label: "FY24", value: 2.9 },
        { label: "FY25", value: 4.2 },
      ],
      caption: "Realized savings by fiscal year ($M)",
    },
  },
  {
    id: "ai-operations-2",
    category: "ai-operations",
    title: "Intelligent Document Search",
    description:
      "Semantic search across internal knowledge bases to help teams find information faster.",
    status: "pilot",
    impact: "60% faster document retrieval",
    owner: "IT & Knowledge Management",
    metric: "60%",
    metricLabel: "Faster document retrieval",
    delta: { value: "60%", direction: "down" },
    chart: {
      kind: "donut",
      data: [{ label: "of eligible queries answered autonomously", value: 71 }],
      caption: "71% of searches fully self-served",
    },
  },
  {
    id: "ai-operations-3",
    category: "ai-operations",
    title: "Predictive Maintenance",
    description:
      "ML models forecast equipment failures before they occur, minimizing downtime.",
    status: "planned",
    owner: "Operations",
    metric: "34%",
    metricLabel: "Fewer unplanned outages",
    delta: { value: "34%", direction: "down" },
    chart: {
      kind: "area",
      data: [
        { label: "Q1", value: 29 },
        { label: "Q2", value: 24 },
        { label: "Q3", value: 21 },
        { label: "Q4", value: 19 },
      ],
      caption: "Unplanned outages per quarter",
    },
  },
  {
    id: "ai-operations-4",
    category: "ai-operations",
    title: "Supply Chain Demand Forecasting",
    description:
      "ML-driven demand prediction to optimize inventory levels and reduce stockouts.",
    status: "live",
    impact: "18% reduction in excess inventory",
    owner: "Supply Chain",
    metric: "18%",
    metricLabel: "Reduction in excess inventory",
    delta: { value: "18%", direction: "down" },
    chart: {
      kind: "area",
      data: [
        { label: "Q1", value: 100 },
        { label: "Q2", value: 94 },
        { label: "Q3", value: 88 },
        { label: "Q4", value: 82 },
      ],
      caption: "Excess inventory level (indexed to Q1)",
    },
  },
  {
    id: "ai-operations-5",
    category: "ai-operations",
    title: "Automated Contract Review",
    description:
      "AI flags non-standard clauses and compliance risks in vendor and partner agreements.",
    status: "pilot",
    impact: "70% faster initial contract review",
    owner: "Legal Operations",
    metric: "73%",
    metricLabel: "Contracts auto-reviewed",
    delta: { value: "2.6x", direction: "up" },
    chart: {
      kind: "progress",
      data: [
        { label: "Auto-reviewed", value: 73 },
        { label: "Escalated", value: 19 },
        { label: "Manual", value: 8 },
      ],
      caption: "Review disposition, trailing 90 days",
    },
  },
  {
    id: "ai-operations-6",
    category: "ai-operations",
    title: "Workforce Scheduling Optimizer",
    description:
      "AI optimizes shift assignments and resource allocation based on demand patterns.",
    status: "planned",
    owner: "HR Operations",
    metric: "8,900",
    metricLabel: "Scheduling hours saved / yr",
    delta: { value: "28%", direction: "up" },
    chart: {
      kind: "bar",
      data: [
        { label: "Q1", value: 1600 },
        { label: "Q2", value: 2050 },
        { label: "Q3", value: 2480 },
        { label: "Q4", value: 2770 },
      ],
      caption: "Hours saved per quarter",
    },
  },
  {
    id: "ai-experience-1",
    category: "ai-experience",
    title: "AI-Powered Support Assistant",
    description:
      "Conversational AI handles common customer inquiries, escalating complex cases to agents.",
    status: "live",
    impact: "35% reduction in support ticket volume",
    owner: "Customer Success",
    metric: "35%",
    metricLabel: "Reduction in ticket volume",
    delta: { value: "35%", direction: "down" },
    chart: {
      kind: "donut",
      data: [{ label: "of inquiries resolved autonomously", value: 65 }],
      caption: "65% of inquiries fully self-served",
    },
  },
  {
    id: "ai-experience-2",
    category: "ai-experience",
    title: "Personalized Recommendations",
    description:
      "Machine learning tailors product and content suggestions based on user behavior.",
    status: "live",
    impact: "12% increase in conversion rate",
    owner: "Product & Marketing",
    metric: "12%",
    metricLabel: "Increase in conversion rate",
    delta: { value: "12%", direction: "up" },
    chart: {
      kind: "area",
      data: [
        { label: "Q1", value: 3.1 },
        { label: "Q2", value: 3.4 },
        { label: "Q3", value: 3.8 },
        { label: "Q4", value: 4.2 },
      ],
      caption: "Conversion rate by quarter (%)",
    },
  },
  {
    id: "ai-experience-3",
    category: "ai-experience",
    title: "Sentiment Analysis Dashboard",
    description:
      "Real-time analysis of customer feedback across channels to surface emerging issues.",
    status: "pilot",
    owner: "Customer Insights",
    metric: "94%",
    metricLabel: "Classification precision",
    delta: { value: "11%", direction: "up" },
    chart: {
      kind: "progress",
      data: [
        { label: "Precision", value: 94 },
        { label: "Recall", value: 91 },
        { label: "Channel coverage", value: 87 },
      ],
      caption: "Model performance vs. human baseline",
    },
  },
  {
    id: "ai-experience-4",
    category: "ai-experience",
    title: "Intelligent Onboarding Flow",
    description:
      "Adaptive onboarding paths that personalize setup steps based on user role and goals.",
    status: "live",
    impact: "28% increase in activation rate",
    owner: "Product Design",
    metric: "28%",
    metricLabel: "Increase in activation rate",
    delta: { value: "28%", direction: "up" },
    chart: {
      kind: "bar",
      data: [
        { label: "Q1", value: 46 },
        { label: "Q2", value: 51 },
        { label: "Q3", value: 56 },
        { label: "Q4", value: 59 },
      ],
      caption: "Activation rate by quarter (%)",
    },
  },
  {
    id: "ai-experience-5",
    category: "ai-experience",
    title: "Voice-Enabled Customer Portal",
    description:
      "Natural language interface allowing customers to navigate services and get answers hands-free.",
    status: "pilot",
    owner: "Digital Experience",
    metric: "2.4x",
    metricLabel: "Faster task completion",
    delta: { value: "140%", direction: "up" },
    chart: {
      kind: "donut",
      data: [{ label: "of sessions completed hands-free", value: 58 }],
      caption: "58% of portal sessions voice-driven",
    },
  },
  {
    id: "ai-experience-6",
    category: "ai-experience",
    title: "Proactive Churn Prevention",
    description:
      "ML models identify at-risk accounts and trigger personalized retention outreach.",
    status: "planned",
    impact: "Target 15% churn reduction",
    owner: "Customer Retention",
    metric: "15%",
    metricLabel: "Target churn reduction",
    delta: { value: "15%", direction: "down" },
    chart: {
      kind: "area",
      data: [
        { label: "Q1", value: 4.8 },
        { label: "Q2", value: 4.5 },
        { label: "Q3", value: 4.2 },
        { label: "Q4", value: 4.1 },
      ],
      caption: "Monthly churn rate, projected (%)",
    },
  },
];
