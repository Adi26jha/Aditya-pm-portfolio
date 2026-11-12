// Self-initiated product teardowns. Unlike src/content/work, these are not
// client work: each is a public prompt answered independently, and says so.
// `published: false` keeps a teardown out of the live site (dev only) until approved.

export const teardowns = [
  {
    slug: 'playstation-5',
    title: 'Making a PS5 feel faster without touching the hardware',
    summary:
      'A product teardown of how a standard PS5 could deliver more of the performance it already has, through system software.',
    tags: ['Consumer hardware', 'Problem framing', 'RICE', 'Metrics'],
    readTime: '12 min',
    published: true,
  },
  {
    slug: 'airbnb-flow',
    title: "Airbnb's booking flow, through the lens of flow",
    summary:
      'A screen-by-screen audit of booking a stay on Airbnb, checked against the conditions for flow, with a prioritised fix and an experiment.',
    tags: ['Marketplace', 'UX audit', 'Behavioural design', 'Experiment design'],
    readTime: '10 min',
    published: true,
  },
];
