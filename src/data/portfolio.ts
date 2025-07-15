import { Experience, Education, Project, Skill, SocialLink } from '../types';

export const personalInfo = {
    name: "Rajesh Pedagoni",
    role: "Full Stack Developer",
    experience: "5+ Years of Experience",
    description: "I build scalable web applications and real-time systems using modern full-stack technologies",
    location: "Kansas City, MO",
    email: "rajeshgoud5698@gmail.com",
    about: `I'm Rajesh Pedagoni, a passionate Full Stack Software Engineer with 5+ years of experience building scalable web applications and distributed systems across fintech, healthcare, and e-commerce domains. I specialize in designing robust APIs, developing microservices, and delivering real-time solutions using modern frameworks like Spring Boot, Node.js, and React.

From deploying cloud-native apps on AWS to optimizing backend performance with Kafka, Redis, and GraphQL, I focus on writing clean, efficient code that solves real-world problems. I thrive in collaborative environments and enjoy turning complex requirements into elegant, maintainable solutions.

Currently based in Kansas City, I'm pursuing my Master's in Computer Science while building impactful products that blend performance, security, and great user experience.`
};

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
            "Redesigned legacy systems into Node.js & Express microservices, reducing API latency from 800ms to 600ms.",
            "Built new features with React + Redux, increasing user engagement by 20% in the first month.",
            "Optimized MySQL queries, improving page load speed by 15%.",
            "Migrated from REST to GraphQL, reducing API response payloads by 35%.",
            "Strengthened platform security using JWT + Spring Security with RBAC.",
            "Improved backend throughput by 60% using Redis caching and async processing."
        ]
    },
    {
        company: "NetMeds",
        role: "Software Engineer",
        period: "Jun 2020 – Dec 2022",
        description: [
            "Provisioned MongoDB clusters for 2TB+ EMR data, enabling fast patient record retrieval.",
            "Monitored and debugged 25+ Spring Boot microservices with Grafana + Prometheus.",
            "Integrated Kafka Connect for real-time ETL; cut manual reporting by 70%.",
            "Dockerized and deployed 30+ services on EKS, cutting error rates by 80% and scaling to 1M+ users.",
            "Built responsive React dashboards, boosting hospital staff efficiency by 40%."
        ]
    },
    {
        company: "Flipkart",
        role: "Software Developer",
        period: "Apr 2019 – May 2020",
        description: [
            "Developed REST APIs for catalog/cart, improving response times by 25% and reducing drop-offs by 20%.",
            "Built 12+ DDD-based microservices, reducing downtime by 30% during traffic spikes.",
            "Tuned Java apps to lower JVM memory usage by 20% and accelerate startup by 15%.",
            "Used Redis and Memcached to cut backend load by 40%, boosting flash sale speed by 1.2s."
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
        degree: "Bachelors in Electronics",
        period: "Aug 2016 – May 2020",
        location: "Hyderabad, India"
    }
];

export const skills: Skill[] = [
    // Backend
    { name: "Java", level: 95, category: "backend" },
    { name: "Spring Boot", level: 90, category: "backend" },
    { name: "Kafka", level: 85, category: "backend" },
    { name: "RESTful APIs", level: 80, category: "backend" },
    { name: "Node.js", level: 85, category: "backend" },
    { name: "Express.js", level: 85, category: "backend" },
    { name: "Hibernate", level: 85, category: "backend" },
    { name: "RabbitMQ", level: 85, category: "backend" },
    { name: "JWT", level: 80, category: "backend" },
    { name: "OAuth2", level: 75, category: "backend" },

    // Frontend
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React.js", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "HTML/CSS", level: 85, category: "frontend" },
    { name: "Redux", level: 80, category: "frontend" },
    { name: "JQuery", level: 85, category: "frontend" },

    // DevOps
    { name: "Jenkins", level: 90, category: "devops" },
    { name: "Docker", level: 90, category: "devops" },
    { name: "Terraform", level: 85, category: "devops" },
    { name: "SonarQube", level: 80, category: "devops" },
    { name: "Ansible", level: 80, category: "devops" },
    { name: "Bash", level: 85, category: "devops" },
    { name: "Git", level: 90, category: "devops" },
    { name: "Maven", level: 85, category: "devops" },
    { name: "Grafana", level: 80, category: "devops" },

    // Cloud
    { name: "AWS", level: 85, category: "cloud" },
    { name: "Kubernetes", level: 80, category: "cloud" },
    { name: "Redis", level: 85, category: "cloud" },
    { name: "MongoDB", level: 90, category: "cloud" },

    // DataBases
    { name: "MongoDB", level: 90, category: "database" },
    { name: "Redis", level: 85, category: "database" },
    { name: "MySQL", level: 85, category: "database" },
    { name: "PostgreSQL", level: 80, category: "database" },
    { name: "Oracle", level: 80, category: "database" },
    { name: "Kafka", level: 85, category: "database" },
    { name: "RabbitMQ", level: 75, category: "database" },
    { name: "GraphQL", level: 80, category: "database" },

    // CoreSkills
    { name: "Microservices", level: 90, category: "core" },
    { name: "API Development", level: 88, category: "core" },
    { name: "CI/CD", level: 85, category: "core" },
    { name: "Debugging", level: 87, category: "core" },
    { name: "Performance Optimization", level: 83, category: "core" },
    { name: "Secure Auth (JWT, OAuth2, RBAC)", level: 82, category: "core" },
    { name: "Software Design", level: 88, category: "core" }
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
