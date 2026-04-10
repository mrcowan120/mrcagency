export const siteConfig = {
  name: "MRC Agency",
  url: "https://mrcagency.co",
  email: "matt@mrcagency.co",
  founder: "Matthew Cowan",
  foundingDate: "2024",
  address: {
    street: "",
    city: "Irvine",
    state: "CA",
    zip: "92618",
    country: "US",
  },
  geo: {
    latitude: 33.6846,
    longitude: -117.8265,
  },
  description:
    "MRC Agency builds content engines, scales creator ecosystems, and turns storytelling into measurable growth for brands in food, CPG, entertainment, and lifestyle.",
};

export interface Service {
  number: string;
  slug: string;
  title: string;
  titleOneLine: string;
  description: string;
  longDescription: string;
  whatWeDeliver: string[];
  color: string;
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  faqs: { question: string; answer: string }[];
  relatedCaseStudySlugs: string[];
}

export const services: Service[] = [
  {
    number: "01",
    slug: "content-production",
    title: "Content Production\n& Content Engines",
    titleOneLine: "Content Production & Content Engines",
    description:
      "We design and execute high-output content systems — short-form video, UGC frameworks, creative direction, and editing pipelines. Not just making content. Building machines that produce it at scale.",
    longDescription:
      "Most brands treat content as a deliverable. We treat it as infrastructure. MRC builds content engines — repeatable systems that produce high-volume, platform-native content without sacrificing quality. From creative direction and scripting to production, editing, and publishing — we own the full pipeline. Whether it's short-form video for TikTok, UGC frameworks for paid and organic, or full editorial calendars — we build the machine and run it.",
    whatWeDeliver: [
      "Short-form video production (TikTok, Reels, Shorts)",
      "UGC frameworks and creator briefs",
      "Creative direction and scripting",
      "Editing pipelines and post-production",
      "Content calendars and publishing workflows",
      "Platform-native content strategy",
    ],
    color: "bg-[#E85D3A]",
    featured: true,
    metaTitle: "Content Production Agency | MRC Agency",
    metaDescription:
      "High-output content systems: short-form video, UGC frameworks, creative direction, and editing pipelines that produce at scale.",
    primaryKeyword: "content production agency",
    secondaryKeywords: [
      "content engine",
      "UGC agency",
      "short-form video production",
      "content systems",
    ],
    faqs: [
      {
        question: "What does a content engine include?",
        answer:
          "A content engine is a repeatable system for producing high-volume content. It includes creative direction, scripting, production workflows, editing pipelines, and publishing schedules — all designed to produce platform-native content consistently without bottlenecks.",
      },
      {
        question: "How much content do you produce per month?",
        answer:
          "Output depends on the engagement, but most content engine clients receive 30–60+ pieces of content per month across platforms. We scale production based on your goals, budget, and distribution strategy.",
      },
      {
        question: "Do you handle creative direction and editing?",
        answer:
          "Yes. We own the full pipeline — from concept and scripting through production, editing, and final delivery. You're not managing freelancers. You're getting a fully integrated content team.",
      },
      {
        question: "What platforms do you produce content for?",
        answer:
          "We produce content optimized for TikTok, Instagram (Reels and Stories), YouTube Shorts, and paid social. Every piece is designed for the platform it lives on — not repurposed from a single asset.",
      },
    ],
    relatedCaseStudySlugs: ["bloomhouse-content-engine", "typhur-launch"],
  },
  {
    number: "02",
    slug: "influencer-programs",
    title: "Influencer &\nCreator Programs",
    titleOneLine: "Influencer & Creator Programs",
    description:
      "End-to-end creator ecosystems — sourcing, outreach, deal structuring, affiliate programs, and long-term ambassador partnerships. We build creator infrastructure, not just influencer posts.",
    longDescription:
      "One-off influencer posts don't build brands. Creator ecosystems do. MRC designs and manages full-lifecycle creator programs — from sourcing and vetting to outreach, negotiation, deal structuring, content approvals, and performance tracking. We build affiliate programs, ambassador networks, and seeding strategies that turn creators into long-term growth channels.",
    whatWeDeliver: [
      "Creator sourcing, vetting, and outreach",
      "Deal structuring and contract negotiation",
      "Affiliate program design and management",
      "Ambassador and seeding programs",
      "Content approval workflows",
      "Performance tracking and reporting",
    ],
    color: "bg-[#1A2744]",
    featured: true,
    metaTitle: "Influencer Marketing Agency | MRC Agency",
    metaDescription:
      "End-to-end creator ecosystems: sourcing, outreach, deal structuring, affiliate programs, and long-term ambassador partnerships.",
    primaryKeyword: "influencer marketing agency",
    secondaryKeywords: [
      "creator programs",
      "influencer agency",
      "ambassador programs",
      "creator partnerships",
    ],
    faqs: [
      {
        question: "How do you source and vet creators?",
        answer:
          "We use a combination of platform research, audience analysis, content quality assessment, and brand-fit scoring. Every creator is vetted for engagement authenticity, audience demographics, and alignment with your brand values before outreach.",
      },
      {
        question: "Do you manage the full creator relationship?",
        answer:
          "Yes. We handle everything from initial outreach and negotiation through content approvals, payment, and ongoing relationship management. You get the results without the operational burden.",
      },
      {
        question: "What's the difference between a creator program and one-off posts?",
        answer:
          "One-off posts are transactions. Creator programs are systems — they build compounding relationships, generate ongoing content, and create sustainable growth channels. Programs include affiliate structures, ambassador tiers, and long-term partnerships that scale.",
      },
    ],
    relatedCaseStudySlugs: ["hexclad-holiday-dinner", "typhur-launch"],
  },
  {
    number: "03",
    slug: "brand-strategy",
    title: "Brand Strategy\n& Storytelling",
    titleOneLine: "Brand Strategy & Storytelling",
    description:
      "Messaging architecture, persona-driven storytelling, and social-first brand voice. We build the narrative foundation that makes everything else work.",
    longDescription:
      "Content without strategy is noise. MRC builds the narrative foundation that makes every piece of content, every campaign, and every creator partnership hit harder. We develop messaging architecture, define brand voice for social-first audiences, and create persona-driven storytelling frameworks that give your brand a point of view worth following.",
    whatWeDeliver: [
      "Brand messaging architecture",
      "Social-first brand voice development",
      "Persona-driven storytelling frameworks",
      "Content pillars and narrative strategy",
      "Competitive positioning analysis",
      "Brand guidelines for social and content",
    ],
    color: "",
    featured: false,
    metaTitle: "Brand Strategy Agency | MRC Agency",
    metaDescription:
      "Messaging architecture, persona-driven storytelling, and social-first brand voice that drives measurable growth for food, CPG, and lifestyle brands.",
    primaryKeyword: "brand strategy agency",
    secondaryKeywords: [
      "brand storytelling",
      "messaging architecture",
      "brand voice development",
      "social-first branding",
    ],
    faqs: [
      {
        question: "What is messaging architecture?",
        answer:
          "Messaging architecture is the strategic framework that defines how your brand communicates — your core narrative, key messages, tone of voice, and how they flex across different platforms and audiences. It's the foundation that makes all your content cohesive and compelling.",
      },
      {
        question: "How does brand strategy connect to content?",
        answer:
          "Strategy gives content direction. Without it, you're producing volume without purpose. Brand strategy defines what you say, why it matters, and how to say it in a way that resonates with your audience and drives business outcomes.",
      },
      {
        question: "Do you work with existing brand guidelines?",
        answer:
          "Yes. We can build from scratch or refine existing guidelines. Many clients come to us with traditional brand guidelines that don't translate to social and content. We bridge that gap.",
      },
    ],
    relatedCaseStudySlugs: ["bloomhouse-content-engine", "campo-grande-dtc-growth"],
  },
  {
    number: "04",
    slug: "social-media-management",
    title: "Social Media\nManagement & Growth",
    titleOneLine: "Social Media Management & Growth",
    description:
      "Content calendars, posting strategy, community management, and platform-native growth tactics across TikTok, Instagram, and YouTube.",
    longDescription:
      "Social media isn't a channel — it's the front door for modern brands. MRC manages your social presence end-to-end: content calendars, posting strategy, community management, and platform-native growth tactics. We don't just post content. We build social presences that grow audiences, drive engagement, and convert followers into customers.",
    whatWeDeliver: [
      "Content calendar planning and management",
      "Platform-native posting strategy",
      "Community management and engagement",
      "Growth tactics for TikTok, Instagram, and YouTube",
      "Social analytics and reporting",
      "Trend monitoring and real-time content",
    ],
    color: "",
    featured: false,
    metaTitle: "Social Media Management Agency | MRC Agency",
    metaDescription:
      "Content calendars, posting strategy, community management, and platform-native growth across TikTok, Instagram, and YouTube.",
    primaryKeyword: "social media management agency",
    secondaryKeywords: [
      "social media growth",
      "TikTok management",
      "Instagram management",
      "social media agency",
    ],
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer:
          "We specialize in TikTok, Instagram, and YouTube — the platforms that drive discovery and growth for consumer brands. We can also manage LinkedIn, X, and Pinterest based on your audience and goals.",
      },
      {
        question: "Do you handle community management?",
        answer:
          "Yes. Community management is a core part of our social media service. We respond to comments, engage with your audience, and build the kind of active community that drives organic growth and brand loyalty.",
      },
      {
        question: "How do you measure social media growth?",
        answer:
          "We track follower growth, engagement rate, reach, impressions, saves, shares, and conversion metrics. Every month you get clear reporting that ties social performance back to business outcomes.",
      },
    ],
    relatedCaseStudySlugs: ["typhur-launch", "bloomhouse-content-engine"],
  },
  {
    number: "05",
    slug: "performance-marketing",
    title: "Performance &\nConversion Strategy",
    titleOneLine: "Performance & Conversion Strategy",
    description:
      "Paid + organic alignment, conversion scripting, funnel integration, and retention strategy. The goal isn't views — it's revenue per piece of content.",
    longDescription:
      "Views don't pay bills. Revenue does. MRC builds performance and conversion strategies that align your paid and organic efforts, optimize your content for conversion, and build funnels that turn attention into revenue. From conversion scripting and landing page strategy to retention flows and ROAS optimization — we focus on the metrics that matter.",
    whatWeDeliver: [
      "Paid and organic content alignment",
      "Conversion scripting and optimization",
      "Funnel strategy and integration",
      "Retention and lifecycle marketing",
      "ROAS optimization and reporting",
      "Landing page and offer strategy",
    ],
    color: "bg-[#1A2744]",
    featured: true,
    metaTitle: "Performance Marketing Agency | MRC Agency",
    metaDescription:
      "Paid and organic alignment, conversion scripting, funnel integration, and retention strategy focused on revenue, not vanity metrics.",
    primaryKeyword: "performance marketing agency",
    secondaryKeywords: [
      "conversion strategy",
      "DTC performance marketing",
      "ROAS optimization",
      "funnel strategy",
    ],
    faqs: [
      {
        question: "How do you align paid and organic content?",
        answer:
          "We build a unified content strategy where organic content validates messaging and paid amplifies what works. Top-performing organic content becomes the basis for paid creative, and paid insights feed back into organic strategy.",
      },
      {
        question: "What ROAS can I expect?",
        answer:
          "Results vary by brand, product, and market, but our clients typically see 3–5x blended ROAS. We focus on building sustainable performance systems rather than short-term spikes.",
      },
      {
        question: "Do you manage ad accounts?",
        answer:
          "Our focus is on the creative and strategic side of performance — the content, messaging, and conversion architecture that makes ads work. We partner with your media buying team or can recommend trusted partners for account management.",
      },
    ],
    relatedCaseStudySlugs: ["campo-grande-dtc-growth", "typhur-launch"],
  },
  {
    number: "06",
    slug: "campaigns-events",
    title: "Campaigns,\nActivations & Events",
    titleOneLine: "Campaigns, Activations & Events",
    description:
      "Event activations, sweepstakes, sponsorship integrations, and high-concept campaign execution. From food festivals to viral stunts — we make brands show up.",
    longDescription:
      "Some moments need more than content — they need experiences. MRC plans and executes campaigns, brand activations, and events that create cultural moments and generate content at scale. From creator dinners and food festival activations to sweepstakes and sponsorship integrations, we build experiences that put brands at the center of conversation.",
    whatWeDeliver: [
      "Event concept and production",
      "Creator dinner and experience planning",
      "Sweepstakes and giveaway campaigns",
      "Sponsorship integration strategy",
      "Festival and pop-up activations",
      "Campaign creative and execution",
    ],
    color: "bg-[#E85D3A]",
    featured: true,
    metaTitle: "Event Activation Agency | MRC Agency",
    metaDescription:
      "Event activations, sweepstakes, sponsorship integrations, and high-concept campaign execution for food, CPG, and lifestyle brands.",
    primaryKeyword: "event activation agency",
    secondaryKeywords: [
      "brand activation",
      "campaign execution",
      "creator events",
      "sponsorship integration",
    ],
    faqs: [
      {
        question: "What types of events do you produce?",
        answer:
          "We produce creator dinners, brand activations, food festival experiences, pop-ups, and high-concept launch events. Every event is designed to generate both real-time engagement and content that extends the moment's impact.",
      },
      {
        question: "Do you handle full event production?",
        answer:
          "Yes. We manage concept development, venue sourcing, creator/guest curation, logistics, on-site production, and content capture. You get a turnkey experience with content output built in.",
      },
      {
        question: "How do events tie into broader marketing strategy?",
        answer:
          "Events aren't standalone moments — they're content engines. Every activation we design is built to produce assets for social, paid, email, and PR. The event is the spark; the content is the fire.",
      },
    ],
    relatedCaseStudySlugs: ["hexclad-holiday-dinner"],
  },
];

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  objectPosition: string;
  challenge: string;
  approach: string;
  results: string;
  metrics: { label: string; value: string }[];
  servicesUsedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const projects: Project[] = [
  {
    slug: "hexclad-holiday-dinner",
    title: "HexClad — Creator Holiday Dinner",
    category: "Event Activation",
    description:
      "Produced an exclusive creator dinner event for HexClad, bringing together top food and lifestyle influencers for an immersive brand experience that generated organic content at scale.",
    tags: ["Events", "Creator Programs", "Content"],
    image: "/images/work/hexclad-dinner.jpg",
    objectPosition: "center 40%",
    challenge:
      "HexClad wanted to deepen relationships with top-tier food and lifestyle creators while generating a wave of authentic, high-quality content during the holiday season — without it feeling like a transactional gifting play.",
    approach:
      "We produced an intimate creator dinner experience — curating the guest list, designing the event concept, managing logistics, and coordinating on-site content capture. Every detail was designed to feel genuine and generate shareable moments organically.",
    results:
      "The event generated a surge of organic creator content across Instagram and TikTok, strengthened HexClad's creator relationships, and produced assets that fueled paid and organic channels for weeks after the event.",
    metrics: [
      { label: "Creators Hosted", value: "25+" },
      { label: "Organic Posts", value: "60+" },
      { label: "Total Reach", value: "8M+" },
    ],
    servicesUsedSlugs: ["campaigns-events", "influencer-programs", "content-production"],
    metaTitle: "HexClad Creator Dinner Case Study | MRC Agency",
    metaDescription:
      "How MRC produced an exclusive creator dinner for HexClad, generating 60+ organic posts and 8M+ reach from top food and lifestyle influencers.",
  },
  {
    slug: "bloomhouse-content-engine",
    title: "Bloomhouse — The Little Moments",
    category: "Content Engine",
    description:
      "Built a content engine around everyday cooking moments, producing a high-volume series of short-form videos that drove engagement and brand affinity for Bloomhouse.",
    tags: ["Content Engine", "Social", "UGC"],
    image: "/images/work/bloomhouse.jpg",
    objectPosition: "center 20%",
    challenge:
      "Bloomhouse needed to establish a social presence that felt authentic and relatable — not corporate. They needed consistent, high-volume content that showcased their cookware in real, everyday moments.",
    approach:
      "We built a content engine centered around 'The Little Moments' — short-form videos capturing the beauty in everyday cooking. From concept and scripting to production and editing, we created a repeatable system that produced 40+ pieces of content per month.",
    results:
      "The content engine drove significant engagement growth, established Bloomhouse's social voice, and produced a library of assets that fueled both organic and paid channels.",
    metrics: [
      { label: "Monthly Content Output", value: "40+" },
      { label: "Engagement Rate", value: "6.8%" },
      { label: "Social Growth", value: "220%" },
    ],
    servicesUsedSlugs: ["content-production", "social-media-management", "brand-strategy"],
    metaTitle: "Bloomhouse Content Engine Case Study | MRC Agency",
    metaDescription:
      "How MRC built a content engine producing 40+ monthly short-form videos for Bloomhouse, driving 220% social growth and 6.8% engagement.",
  },
  {
    slug: "campo-grande-dtc-growth",
    title: "Campo Grande — DTC Growth",
    category: "Performance & Growth",
    description:
      "Scaled Campo Grande's DTC business through integrated content and conversion strategy — aligning paid, organic, and email to drive a 36% YoY revenue increase.",
    tags: ["DTC", "Performance", "Email"],
    image: "/images/work/campo-grande.jpg",
    objectPosition: "center 60%",
    challenge:
      "Campo Grande had strong brand equity but was underperforming in DTC. Their content, paid, and email efforts were siloed — each running independently without a unified conversion strategy.",
    approach:
      "We integrated their content, paid media, and email into a single performance system. Organic content validated messaging, top performers fueled paid creative, and email captured and nurtured the traffic. Every piece of the funnel was connected.",
    results:
      "The integrated approach drove a 36% year-over-year revenue increase, improved ROAS across paid channels, and built a sustainable DTC growth engine.",
    metrics: [
      { label: "YoY Revenue Lift", value: "36%" },
      { label: "Blended ROAS", value: "4.2x" },
      { label: "Email Revenue Share", value: "28%" },
    ],
    servicesUsedSlugs: ["performance-marketing", "content-production", "brand-strategy"],
    metaTitle: "Campo Grande DTC Growth Case Study | MRC Agency",
    metaDescription:
      "How MRC scaled Campo Grande's DTC revenue 36% YoY through integrated content, paid media, and email with 4.2x blended ROAS.",
  },
  {
    slug: "typhur-launch",
    title: "Typhur — Launch to Scale",
    category: "Full-Stack Growth",
    description:
      "Took Typhur from launch to brand awareness through creator seeding, social content production, and a TikTok-first strategy that built the brand's digital presence from scratch.",
    tags: ["Social", "Creator Programs", "Content"],
    image: "/images/work/typhur.jpg",
    objectPosition: "center 30%",
    challenge:
      "Typhur was launching into a competitive kitchen appliance market with zero brand awareness and no existing social presence. They needed to build credibility and audience from scratch — fast.",
    approach:
      "We executed a TikTok-first launch strategy combining creator seeding, social content production, and community building. We identified and partnered with food creators, produced platform-native content, and built Typhur's social presence from zero to a thriving community.",
    results:
      "The launch strategy built Typhur's social presence from zero to 130K+ followers, established the brand in the kitchen appliance space, and created a sustainable content and creator pipeline for ongoing growth.",
    metrics: [
      { label: "Followers From Zero", value: "130K+" },
      { label: "Impression Growth", value: "188%" },
      { label: "Creator Partners", value: "50+" },
    ],
    servicesUsedSlugs: ["influencer-programs", "content-production", "social-media-management"],
    metaTitle: "Typhur Product Launch Case Study | MRC Agency",
    metaDescription:
      "How MRC launched Typhur from zero to 130K+ followers through creator seeding, social content, and a TikTok-first strategy.",
  },
];
