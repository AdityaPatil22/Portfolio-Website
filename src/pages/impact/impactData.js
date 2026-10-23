export const talks = [
  {
    title:
      "It Was Fast on My Machine: What Production Reveals About Web Performance",
    conference: "DevConf.cz 2026",
    description:
      "Why apps that fly locally crawl in production—caching, CDNs, HTTP headers, and designing for predictable scale.",
    href: "https://pretalx.devconf.info/devconf-cz-2026/talk/review/9WKRL8SJYXMZPRMJLEEAWVMVGWGBDXT8",
  },
  {
    title:
      "Unpacking the Llama Stack: Architecting Next-Gen AI Applications",
    conference: "DevConf.in 2026",
    description:
      "Exploring the Llama Stack’s modular architecture for building, deploying, and scaling LLM-powered applications.",
    href: "https://pretalx.devconf.info/devconf-in-2026/talk/review/DN7C8K9PL3EW8FEANC7WXURTCPEF8B9C",
  },
  {
    title: "Fedora as a Developer Workstation: A 6-Month Field Report",
    conference: "Flock to Fedora 2026",
    description:
      "Honest field report on using Fedora as a full-time developer workstation.",
    href: "https://cfp.fedoraproject.org/flock-to-fedora-2026/talk/review/3LRGCJXTLV3NLDXUGAJHGAZZKFYTX7WR",
  },
  {
    title:
      "Documentation as Infrastructure: Why Fedora Docs Matter More Than We Think",
    conference: "Flock to Fedora 2026",
    description:
      "Why treating documentation as infrastructure shapes contributor onboarding and long-term sustainability.",
    href: "https://cfp.fedoraproject.org/flock-to-fedora-2026/talk/review/TZJAWJGQ3H7RTBLY7DCGBHXQXG9FV9BR",
  },
];

export const contributions = [
  {
    repo: "Feast",
    title: "Fixed UI not displaying newly created projects",
    description:
      "Replaced static file loading with a dynamic API route for SQL Registry projects.",
    tags: ["Frontend", "React", "API"],
    href: "https://github.com/feast-dev/feast/pull/6657",
    linkLabel: "View PR",
  },
  {
    repo: "Feast",
    title: "Reported incorrect project statistics",
    description:
      "Identified homepage counts incorrectly aggregating data across all projects.",
    tags: ["Bug Report", "Frontend"],
    href: "https://github.com/feast-dev/feast/issues/6651",
    linkLabel: "View Issue",
  },
  {
    repo: "Feast",
    title: "Fixed Helm deployment image reference",
    description:
      "Corrected feature-server image from a non-existent Java image to the proper Python image.",
    tags: ["Helm", "Kubernetes", "Python"],
    href: "https://github.com/feast-dev/feast/pull/6607",
    linkLabel: "View PR",
  },
];

export const articles = [
  {
    title: "Two Conferences, Three Talks, One Unforgettable Journey",
    platform: "Medium",
    description:
      "Recounting the experience of speaking at two international developer conferences.",
    href: "https://medium.com/@adityapatil7649/two-conferences-three-talks-one-unforgettable-journey-cf37bd4981f0",
  },
  {
    title: "Unlocking the Power of Protocol Buffers (Protobuf)",
    platform: "Medium",
    description:
      "A deep dive into Google’s modern serialization format.",
    href: "https://medium.com/@adityapatil7649/unlocking-the-power-of-protocol-buffers-protobuf-a-modern-serialization-format-24ec35d540b4",
  },
  {
    title: "The First Time I Stepped Onto a Developer Conference Stage",
    platform: "Medium",
    description: "Lessons learned from giving my first conference talk.",
    href: "https://medium.com/@adityapatil7649/my-first-tech-talk-taught-me-more-than-the-slides-ever-could-5fc4d87425be",
  },
  {
    title:
      "Why Building AI Systems Feels Messy — Until You Use Llama Stack",
    platform: "Medium",
    description: "How Llama Stack simplifies production AI systems.",
    href: "https://medium.com/@adityapatil7649/why-building-ai-systems-feels-messy-until-you-use-llama-stack-f1445139f7f4",
  },
  {
    title: "Battle of the Runtimes: Node.js vs Deno vs Bun",
    platform: "Medium",
    description: "Comparing today’s major JavaScript runtimes.",
    href: "https://medium.com/@adityapatil7649/battle-of-the-runtimes-node-js-vs-deno-vs-bun-a5f57256aa1d",
  },
];
