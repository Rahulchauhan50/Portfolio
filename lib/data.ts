export type Project = {
  id: number;
  title: string;
  year: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Assisted Email Triage",
    year: "2024",
    shortDesc: "An intelligent automation system that parses, categorizes, and prioritizes incoming corporate emails.",
    longDesc: "This project leverages Large Language Models (LLMs) to automate the tedious process of email management. It uses Node.js microservices to fetch emails, OpenAI's API for classification and summarization, and Prisma for persistent storage. The system significantly reduces response times and ensures critical emails are never missed. It features a dashboard for monitoring triage accuracy and manual overrides.",
    tech: ["Next.js", "OpenAI", "Prisma", "Node.js", "Tailwind CSS"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKoHI1m5CyF6c07mapTNS6TF6kuFgPC-SswdHydDbjHeFmpqRJB7uG6qvUDXDULMWPxhHqcn-gZmDUl7AAXZSDmU7Fznmcy2W4yQdFxlMaDjSfk2EugAPZFvcRkHGWsB3UmGxR0g-dQUGtMdCh0fPzdLA6lrIv0Xj8JqQInaipl2dX_5y4HAAVAMyfjpcXD7oeRCRpxryPIDYaU6sDGQNZRu2E7bw209M6oXdVlDWs5h5GcygzoKfIrL4QtAEqWuGQCYZAhzpnphg"
  },
  {
    id: 2,
    title: "IT Asset Management",
    year: "2023",
    shortDesc: "Comprehensive enterprise solution for tracking hardware lifecycle and license deployments.",
    longDesc: "A robust MERN-stack application designed for large-scale IT operations. It tracks the entire lifecycle of hardware assets from procurement to retirement. Features include automated inventory reconciliation, license tracking, and detailed reporting. It handles 500+ endpoints with real-time updates via WebSockets, ensuring IT teams have an accurate view of their infrastructure at all times.",
    tech: ["MERN Stack", "Redux", "MongoDB", "Express", "Node.js", "WebSockets"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8OhUVQOQjY1MYZQgP3BWf2o_jooAAsvCpsADMixf0cGLzLBxK1zcycQveRenMgUhTcczDg19TQ0FOBFTAaMBxSgnXGA0rFmDUZ1gZwJ0vdIwlYsRPrlbNIjvWWsIInCf1_v910uXK2PFpOs8MN6wI-QjUKQqtduX_Ol-Ko66EeoR_yJFlbMo39RX97Enpf8-8cMaFHRpWuTOi9E7Kmh5slEH_eokmQIoBi5nvkeYVVBLAx_yFEvDt3z1yHd4xi5Xde3qo9X1AOb0"
  },
  {
    id: 3,
    title: "Legacy Migration Framework",
    year: "2023",
    shortDesc: "Automated toolkit for migrating class-based React components to modern functional components with hooks.",
    longDesc: "Developed a custom AST-based transformation tool that automates 80% of the migration process from legacy React class components to functional components. This tool was used internally to modernize a massive codebase, reducing technical debt and improving developer velocity. It includes automated testing to ensure functional parity after migration.",
    tech: ["TypeScript", "Babel", "jscodeshift", "React", "Jest"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5IwHiaoFWlVoobSc3cM5Y_zu1pd2jxItVthFTt5Hno_AbmlSxHFvu4k1hmjJvqDsqe46FLMC8ppEj_B4GKJaSW1a-U4Rg2l4eZ_vP1ATeHV3s3aHD4uHsOZtdb0LkifCx_IUpZdaVPiv6lX8RTMAcCu91pBdS3fo6m3J4FntihVvmd60Y5Es6mEM18beKvsWgKcCXAgjDbjMGmqG5Hf2EvRjhV_RsnJHUR4CXzKJnf4BgDHYlEJhuFCUkmpYK9cKg4hoR0NDtrNI"
  },
  {
    id: 4,
    title: "Automation Hub",
    year: "2024",
    shortDesc: "Centralized platform for managing complex n8n workflows and Zoho CRM integrations.",
    longDesc: "A specialized dashboard for orchestrating business process automations. It integrates deeply with n8n for workflow management and Zoho CRM for data synchronization. The platform provides real-time monitoring, error logging, and manual trigger capabilities for over 50 automated business processes, significantly reducing manual data entry and operational overhead.",
    tech: ["Next.js", "n8n", "Zoho API", "PostgreSQL", "Tailwind CSS"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKoHI1m5CyF6c07mapTNS6TF6kuFgPC-SswdHydDbjHeFmpqRJB7uG6qvUDXDULMWPxhHqcn-gZmDUl7AAXZSDmU7Fznmcy2W4yQdFxlMaDjSfk2EugAPZFvcRkHGWsB3UmGxR0g-dQUGtMdCh0fPzdLA6lrIv0Xj8JqQInaipl2dX_5y4HAAVAMyfjpcXD7oeRCRpxryPIDYaU6sDGQNZRu2E7bw209M6oXdVlDWs5h5GcygzoKfIrL4QtAEqWuGQCYZAhzpnphg"
  },
  // {
  //   id: 5,
  //   title: "E-Commerce Analytics",
  //   year: "2023",
  //   shortDesc: "Real-time data visualization dashboard for tracking sales performance and customer behavior.",
  //   longDesc: "Built a comprehensive analytics platform for e-commerce businesses. It processes large volumes of sales data and provides interactive visualizations using D3.js and Recharts. Features include cohort analysis, conversion rate tracking, and predictive sales forecasting based on historical trends.",
  //   tech: ["React", "D3.js", "Firebase", "Node.js", "Tailwind CSS"],
  //   image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8OhUVQOQjY1MYZQgP3BWf2o_jooAAsvCpsADMixf0cGLzLBxK1zcycQveRenMgUhTcczDg19TQ0FOBFTAaMBxSgnXGA0rFmDUZ1gZwJ0vdIwlYsRPrlbNIjvWWsIInCf1_v910uXK2PFpOs8MN6wI-QjUKQqtduX_Ol-Ko66EeoR_yJFlbMo39RX97Enpf8-8cMaFHRpWuTOi9E7Kmh5slEH_eokmQIoBi5nvkeYVVBLAx_yFEvDt3z1yHd4xi5Xde3qo9X1AOb0"
  // },
  // {
  //   id: 6,
  //   title: "Smart Inventory System",
  //   year: "2024",
  //   shortDesc: "IoT-integrated inventory management system with automated reordering and stock tracking.",
  //   longDesc: "Developed an IoT-enabled inventory system that uses RFID and barcode scanning for real-time stock tracking. The system automatically generates purchase orders when stock levels fall below a certain threshold and provides detailed insights into inventory turnover and aging.",
  //   tech: ["Next.js", "IoT", "PostgreSQL", "Express", "Tailwind CSS"],
  //   image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKoHI1m5CyF6c07mapTNS6TF6kuFgPC-SswdHydDbjHeFmpqRJB7uG6qvUDXDULMWPxhHqcn-gZmDUl7AAXZSDmU7Fznmcy2W4yQdFxlMaDjSfk2EugAPZFvcRkHGWsB3UmGxR0g-dQUGtMdCh0fPzdLA6lrIv0Xj8JqQInaipl2dX_5y4HAAVAMyfjpcXD7oeRCRpxryPIDYaU6sDGQNZRu2E7bw209M6oXdVlDWs5h5GcygzoKfIrL4QtAEqWuGQCYZAhzpnphg"
  // }
];
