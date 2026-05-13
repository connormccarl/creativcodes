export const salesEmail = "sales@creativcodes.com";

export const serviceTiers = [
  {
    slug: "administrative-services",
    name: "Administrative Services",
    rate: "$59/hr",
    summary: "Reliable execution for essential business support work that should not slow your core team down.",
    items: ["Data entry", "Simple support tasks"],
    accent: "border-primary/30",
  },
  {
    slug: "marketing-operations",
    name: "Marketing & Operations",
    rate: "$129/hr",
    summary: "The spark that turns campaigns, customer journeys, and daily operations into repeatable systems.",
    items: ["Digital marketing", "CRM automation", "Funnel setup", "Customer success systems", "SEO", "Automation"],
    accent: "border-signal/40",
  },
  {
    slug: "technical-consulting",
    name: "Technical Consulting",
    rate: "$149/hr",
    summary: "Practical technical help for companies that need their tools to connect, scale, and behave.",
    items: ["Software customization", "API integrations", "Workflow automation", "Database work", "System modernization"],
    accent: "border-cobalt/40",
  },
  {
    slug: "senior-engineering-cloud",
    name: "Senior Engineering & Cloud",
    rate: "$229/hr",
    summary: "Senior build capacity for production systems, infrastructure, security, and operational reliability.",
    items: ["Full-stack development", "Cloud architecture", "DevOps", "Kubernetes/Docker", "Terraform", "Infrastructure scaling", "Security hardening"],
    accent: "border-amber/50",
  },
  {
    slug: "ai-ml-fractional-cto-services",
    name: "AI/ML & Fractional CTO Services",
    rate: "$350/hr",
    summary: "Executive technical leadership and AI architecture for teams ready to bottle the lightning.",
    items: ["AI/ML systems", "AI agents", "Automation architecture", "Executive advisory", "Technical leadership", "Product strategy", "Scaling engineering teams"],
    accent: "border-primary/60",
  },
];

export const packages = [
  {
    name: "MVP Development Package",
    bestFor: "Founders and business teams validating a new product",
    description: "A focused build sprint for turning a clear product idea into a usable web application with the right technical foundation.",
    includes: ["Product scope", "UX flows", "Full-stack build", "Launch plan"],
  },
  {
    name: "Fractional CTO Package",
    bestFor: "Teams that need senior technical leadership without a full-time executive",
    description: "Strategic technology leadership for roadmap decisions, vendor choices, architecture reviews, and engineering team scaling.",
    includes: ["Executive advisory", "Architecture direction", "Team planning", "Delivery oversight"],
  },
  {
    name: "AI Automation Package",
    bestFor: "Operators ready to reduce manual work with AI agents and automation",
    description: "AI workflow design and implementation for customer support, back-office processes, reporting, and internal knowledge systems.",
    includes: ["AI agent design", "Workflow automation", "Data routing", "Adoption support"],
  },
  {
    name: "Cloud Modernization Package",
    bestFor: "Companies outgrowing fragile hosting, manual deploys, or aging infrastructure",
    description: "Infrastructure modernization for reliability, scaling, observability, DevOps, and security hardening.",
    includes: ["Cloud architecture", "CI/CD", "Terraform", "Security hardening"],
  },
  {
    name: "Lead Generation SaaS Development",
    bestFor: "Sales teams that need proprietary software to create and convert pipeline",
    description: "A productized SaaS build for capturing, enriching, routing, and converting leads through automated customer journeys.",
    includes: ["Lead capture", "CRM automation", "Dashboards", "SaaS workflows"],
  },
];

export const outcomes = [
  ["Revenue systems", "Funnels, CRM automation, SEO, and customer success workflows that convert interest into pipeline."],
  ["Technical leverage", "Integrations, databases, and modernized workflows that remove friction from daily operations."],
  ["Scale readiness", "Cloud, DevOps, security, and engineering leadership for the next phase of growth."],
];

export const stats = [
  ["$59-$350", "hourly service range"],
  ["5", "delivery lanes"],
  ["24h", "response target"],
  ["1", "partner from admin to CTO"],
];

export const engagementSteps = [
  "Map the voltage leak",
  "Prioritize the fastest business spark",
  "Build the system with senior oversight",
  "Measure, harden, and scale",
];

export const navItems = [
  { label: "Rates", href: "#services", id: "services" },
  { label: "Packages", href: "#packages", id: "packages" },
  { label: "Outcomes", href: "#outcomes", id: "outcomes" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Contact", href: "#spark-session", id: "spark-session" },
];

export const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Administrative Services", href: "#administrative-services" },
      { label: "Marketing & Operations", href: "#marketing-operations" },
      { label: "Technical Consulting", href: "#technical-consulting" },
      { label: "Senior Engineering & Cloud", href: "#senior-engineering-cloud" },
      { label: "AI/ML & Fractional CTO", href: "#ai-ml-fractional-cto-services" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Lead conversion systems", href: "#outcomes" },
      { label: "CRM and funnel automation", href: "#outcomes" },
      { label: "Workflow modernization", href: "#outcomes" },
      { label: "Cloud scale readiness", href: "#outcomes" },
      { label: "AI operating architecture", href: "#outcomes" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Hourly rates", href: "#services" },
      { label: "Packages", href: "#packages" },
      { label: "Business outcomes", href: "#outcomes" },
      { label: "Engagement path", href: "#process" },
      { label: "Contact sales", href: "#spark-session" },
      { label: "Email us", action: "modal" },
    ],
  },
];
