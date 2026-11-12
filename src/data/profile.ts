// Single source of truth for everything that comes from the CV.
// Project-level content lives in src/content/work/.

export const profile = {
  name: 'Aditya Jha',
  role: 'Product Manager',
  location: 'Vilnius, Lithuania',
  email: 'adityajha.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aditya-jha2003',
  cv: '/Aditya_Jha_PM_CV.pdf',
  description:
    'Product manager building compliance-heavy B2B platforms for global hiring and payments. Open to PM and APM roles in the EU. No sponsorship required.',
};

/** Hero statement. `href` jumps to the project on the same page. */
export const outcomes = [
  { metric: 'Client onboarding time', value: '−70%', href: '#kyb' },
  { metric: 'Asset orders', value: '+50%', href: '#asset-assignment' },
  { metric: 'EOR onboarding delivery time', value: '−50%', href: '#eor-onboarding' },
  { metric: 'Payout reconciliation effort', value: '−40%', href: '#payouts' },
  { metric: 'Successful asset deliveries', value: '+30%', href: '#asset-assignment' },
  { metric: 'Payment accuracy', value: '+25%', href: '#payouts' },
];

export const principles = [
  {
    title: 'Start with what is still offline',
    body: 'Invoices, salary payments and asset requests were all handled outside the platform at Komp.AI. Each one became a product surface, and the gain showed up in the numbers.',
  },
  {
    title: 'Prototype, then specify',
    body: 'I prototyped EOR onboarding in Lovable first, which halved delivery time, then aligned Product, Engineering and Design on a PRD covering every journey.',
  },
  {
    title: 'Do the technical homework before handoff',
    body: 'I started as a React developer and worked as a data analyst. On payouts, that meant assessing the XE, Stripe and Wise APIs myself before the work reached engineering.',
  },
  {
    title: 'Put rules in config, not code',
    body: 'Compliance rules change by country. Routing them through a config-driven engine means a new country can launch without an engineering release.',
  },
];

export const experience = [
  {
    role: 'Product Management Executive',
    company: 'Komp.AI',
    note: 'EOR / COR platform',
    period: 'Jan 2026 – Oct 2026',
    detail: 'Onboarding, KYB, payouts, routing and asset management. The projects above are from this role.',
  },
  {
    role: 'Product Manager Intern',
    company: 'Filter Trade Technologies',
    period: 'Sep 2025 – Dec 2025',
    detail: 'Ran roadmaps and PRD/FRD documentation for 3 early-stage products, each tied to company OKRs. Presented the competitor research that set launch order.',
  },
  {
    role: 'Data Analyst Intern',
    company: 'eBhasha Setu Language Services',
    period: 'Mar 2025 – May 2025',
    detail: 'Built dashboards on large multilingual datasets that improved content-workflow efficiency by 25%.',
  },
  {
    role: 'Front-End Developer',
    company: 'Wylin IT Solutions',
    period: 'Feb 2024 – May 2024',
    detail: 'Built responsive React.js interfaces and integrated REST APIs, cutting page-load time by 30%.',
  },
];

export const education = [
  { degree: 'MSc, Management of AI Solutions', school: 'VILNIUS TECH, Lithuania', period: '2026 – 2028 (expected)' },
  { degree: 'B.Tech, Computer Science Engineering', school: 'MAIT, GGSIP University, India', period: '2023 – 2026' },
];

export const skills = [
  { group: 'Product', items: 'Discovery, PRD/FRD, roadmapping, RICE/MoSCoW/Kano, OKRs, GTM, Agile/Scrum' },
  { group: 'Domain', items: 'EOR/COR, cross-border payouts, payment APIs, sanctions screening, compliance rule engines' },
  { group: 'Tools', items: 'Jira, Notion, Figma, Lovable, Antigravity, SQL, Python (pandas), Power BI, Tableau, React.js' },
];

export const languages = 'English (fluent), Hindi (native), Lithuanian (beginner)';

export const independentWork = [
  {
    name: 'Bluva',
    url: 'https://bluva.net',
    domain: 'bluva.net',
    image: '/images/bluva.jpg',
    alt: 'Homepage of the Bluva website with the headline Pure Indulgence, Liquid Luxury',
    body: 'Wrote the product requirements and led design and build of the live website for a premium bottled-water brand.',
  },
  {
    name: 'Social Uplift',
    url: 'https://socialuplift.in',
    domain: 'socialuplift.in',
    image: '/images/social-uplift.jpg',
    alt: 'Homepage of the Social Uplift website on a dark background with spotlight lighting',
    body: 'Scoped and built the website a creative agency uses to present its work and services.',
  },
];
