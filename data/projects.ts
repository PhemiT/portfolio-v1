export interface Project {
  id: string;
  heading: string;
  desc: string;
  tools: string[];
  repoLink?: string;
  liveLink: string;
  features: string[];
  status?: string;
  featured?: boolean;
}

export const selectedProjects: Project[] = [
  {
    id: "van-iyke",
    heading: "Van Iyke Music Empire",
    desc: "A full-featured digital media & entertainment platform delivering secure multi-tier streaming and digital distribution.",
    tools: ["Next.js", "Node.js", "Express", "Supabase", "Cloudflare"],
    liveLink: "https://www.vaniykemusicempire.com/",
    features: [
      "HLS Video Streaming",
      "Multi-Provider Payments",
      "Google OAuth 2.0",
      "PDF Flipbook Viewer"
    ],
    status: "Production",
    featured: true
  },
  {
    id: "cloudmost",
    heading: "Cloudmost",
    desc: "A sleek, responsive cloud services management dashboard with reactive metrics and dynamic analytics modals.",
    tools: ["Next.js", "SCSS", "TypeScript"],
    repoLink: "https://github.com/PhemiT/portfolio-contact",
    liveLink: "https://cloudmost.vercel.app/",
    features: ["Interactive Dashboard", "Modal Workflows", "Responsive Layout"],
    status: "Live App",
    featured: true
  },
  {
    id: "paws",
    heading: "Paws Pet Gallery",
    desc: "A social pet gallery web app for discovering, posting, and sharing pet moments with high-performance server-side rendering.",
    tools: ["Next.js", "SCSS", "MongoDB"],
    repoLink: "https://github.com/PhemiT/Paws",
    liveLink: "https://paws-app.vercel.app/",
    features: ["SSR Architecture", "Interactive Carousel", "Photo Feed"],
    status: "Live App",
    featured: true
  },
  {
    id: "csr-page",
    heading: "Heyfood Clone / CSR",
    desc: "Client-side rendered aggregator storefront built with modular UI components and responsive catalogue browsing.",
    tools: ["React", "Material-UI", "Node.js", "MongoDB"],
    repoLink: "https://github.com/PhemiT/test-client",
    liveLink: "https://test-client-alpha.vercel.app/",
    features: ["REST API Endpoints", "Client-Side Rendering", "Store Catalog"],
    status: "Concept",
    featured: false
  }
];

export const archiveProjects: Project[] = [
  {
    id: "gpt3",
    heading: "GPT-3 OpenAI Website",
    desc: "Modern landing page exploring AI capabilities with engaging animations and responsive layout.",
    tools: ["React", "CSS3", "JavaScript"],
    repoLink: "https://github.com/PhemiT/gpt3-openai-site",
    liveLink: "https://gpt3-openai-pt.vercel.app/",
    features: ["Responsive UI", "Modern Typography", "Component Architecture"]
  },
  {
    id: "airmed",
    heading: "Airmed",
    desc: "E-commerce platform for health and medical supplies with payment and order workflows.",
    tools: ["WordPress", "WooCommerce", "PHP"],
    liveLink: "https://airmedng.com/",
    features: ["E-Commerce Storefront", "Secure Checkout", "Inventory Management"]
  },
  {
    id: "domys",
    heading: "Domys",
    desc: "Minimalist SaaS product landing page with animated feature highlights.",
    tools: ["React", "SCSS"],
    repoLink: "https://github.com/PhemiT/domys",
    liveLink: "https://domys.vercel.app",
    features: ["Responsive UI", "Clean Motion Design"]
  },
  {
    id: "boldo",
    heading: "Boldo",
    desc: "Corporate tech startup landing page inspired by Figma design specifications.",
    tools: ["HTML5", "CSS3", "JavaScript"],
    repoLink: "https://github.com/PhemiT/boldo",
    liveLink: "https://boldo-drab.vercel.app/",
    features: ["Pixel-Perfect Layout", "Cross-Browser Support"]
  },
  {
    id: "weather-app",
    heading: "Weather App",
    desc: "Real-time global weather search application with live temperature and forecast data.",
    tools: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
    repoLink: "https://github.com/PhemiT/weather-app",
    liveLink: "http://weather-app-phemit.vercel.app/",
    features: ["Live API Integration", "Dynamic Weather Graphics"]
  },
  {
    id: "movie-search",
    heading: "Movie Search App",
    desc: "Movie search engine querying the OMDb database with instant search and detail modals.",
    tools: ["React", "REST API", "CSS Modules"],
    repoLink: "https://github.com/PhemiT/movie-search-app",
    liveLink: "https://movie-search-app-phemit.vercel.app/",
    features: ["OMDb Integration", "Debounced Search", "Responsive Grid"]
  },
  {
    id: "wordle-clone",
    heading: "Wordle Clone",
    desc: "Browser-based implementation of the viral word puzzle game with animations and win/loss state.",
    tools: ["HTML5", "CSS3", "JavaScript"],
    repoLink: "https://github.com/PhemiT/wordle-clone",
    liveLink: "https://wordle-clone-phemi-t.vercel.app/",
    features: ["Keyboard Integration", "Color-Coded Feedback", "Word Validation"]
  }
];
