import { Experience, Education, Project, Skill, SocialLink } from '../types';

export const personalInfo = {
  name: "Rajesh Pedagoni",
  role: "Full Stack Developer",
  experience: "4+ Years of Experience",
  description:" I design and build scalable, end-to-end web applications using modern full-stack technologies",
  location: "Kansas City, MO",
  email: "rajeshgoud5698@gmail.com",
  about: "Hi, I'm Rajesh Pedagoni, a Full Stack Developer with 4+ years of experience delivering scalable, high-performance applications in healthcare, e-commerce, and fintech. My expertise spans across Java, Spring Boot, Kafka, and React.js, and I'm passionate about designing robust microservices, real-time event-driven systems, and cloud-native solutions using tools like Docker, Kubernetes, and AWS.
From leading cross-functional teams at Intuit to optimizing data pipelines at NetMeds, I bring an engineering mindset focused on efficiency, security, and user impact. I hold a Master’s in Computer Science from the University of Missouri–Kansas City and continuously strive to build systems that scale and solve real-world problems."

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rajesh-p-0291a628b/",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/Rajesh12goud",
    icon: "github"
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1fCi0_pfOmnavdwqnLk1GCIsw5w4-SZRG/view?usp=sharing",
    icon: "file-text"
  }
];

export const experiences: Experience[] = [
  {
    company: "Intuit",
    role: "Full Stack Developer",
    period: "Jun 2024 – Present",
    description: [
      "Developed Props/State UI components with modern React patterns",
      "Implemented Kafka event streaming for real-time data processing",
      "Configured Spring Cloud Config for microservices architecture",
      "Built automated cron jobs for database synchronization"
    ]
  },
  {
    company: "NetMeds",
    role: "Software Engineer",
    period: "Jun 2020 – Dec 2022",
    description: [
      "Designed Spring Boot pipelines processing 2TB+ MongoDB data",
      "Implemented Kafka Connect for real-time data synchronization",
      "Dockerized microservices for scalable deployment",
      "Optimized database queries reducing response time by 40%"
    ]
  },
  {
    company: "Flipkart",
    role: "Software Developer",
    period: "Apr 2019 – May 2020",
    description: [
      "Built REST APIs serving 12+ microservices architecture",
      "Implemented Redis and Memcached for high-performance caching",
      "Set up CI/CD pipelines with Jenkins automation",
      "Contributed to system design for e-commerce platform"
    ]
  }
];

export const education: Education[] = [
  {
    institution: "University of Missouri - Kansas City",
    degree: "Masters in Computer Science",
    period: "Jan 2023 – Dec 2024",
    location: "Kansas City, MO"
  },
  {
    institution: "Jawaharlal Nehru Technological University",
    degree: "Bachelors in Computer Science",
    period: "Aug 2016 – May 2020",
    location: "Hyderabad, India"
  }
];

export const skills: Skill[] = [
  // Backend
  { name: "Java", level: 95, category: "backend" },
  { name: "Spring Boot", level: 90, category: "backend" },
  { name: "Kafka", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "Hibernate", level: 85, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },

  // Frontend
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "HTML/CSS", level: 85, category: "frontend" },

  // DevOps
  { name: "Docker", level: 90, category: "devops" },
  { name: "Jenkins", level: 85, category: "devops" },
  { name: "GitHub Actions", level: 80, category: "devops" },
  { name: "SonarQube", level: 75, category: "devops" },

  // Cloud
  { name: "AWS", level: 85, category: "cloud" },
  { name: "Kubernetes", level: 80, category: "cloud" },
  { name: "Redis", level: 85, category: "cloud" },
  { name: "MongoDB", level: 90, category: "cloud" }
];

export const projects: Project[] = [
  {
    title: "Real-Time Data Pipeline for Stock Market Analytics",
    description: "Built a comprehensive real-time data pipeline using Apache Kafka for ingesting stock market data from public APIs. Implemented Apache Spark Structured Streaming for real-time processing and PostgreSQL for data storage. Created Airflow workflows for batch processing and deployed the entire system using Docker containers. Developed Grafana dashboards for real-time monitoring and system health visualization.",
    technologies: ["Apache Kafka", "Apache Spark", "PostgreSQL", "Airflow", "Docker", "Grafana", "Python"],
    status: "completed"
  },
  {
    title: "E-Commerce Microservices Platform",
    description: "Coming Soon - A scalable e-commerce platform built with microservices architecture.",
    technologies: ["Spring Boot", "Docker", "Kubernetes", "AWS"],
    status: "coming-soon"
  },
  {
    title: "Healthcare Management System",
    description: "Coming Soon - A comprehensive healthcare management system with real-time patient monitoring.",
    technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
    status: "coming-soon"
  }
];

export const techIcons = [
  "☕", "🔧", "🌐", "🐍", "🗃️", "📊", "🚀", "🔄", "🎯", "⚡", "🔒", "📈", "🛠️", "☁️", "🔨", "📋", "🔍", "📊"
];
