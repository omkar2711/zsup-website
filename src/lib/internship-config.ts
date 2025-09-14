// Constants for image paths
const TECH_LOGOS_PATH = '/src/assets/virtualInternshipLogos/tech_logos';
const MGMT_LOGOS_PATH = '/src/assets/virtualInternshipLogos/management_logos';

export interface InternshipProject {
  title: string;
  description: string;
  techStack?: string[];
  skills?: string[];
}

export interface InternshipCompany {
  name: string;
  logo: string;
  projects?: InternshipProject[];
}

export interface InternshipConfig {
  title: string;
  subtitle: string;
  description: string;
  companies: InternshipCompany[];
}

const techCompanies: InternshipCompany[] = [
  {
    name: "Avetti",
    logo: `${TECH_LOGOS_PATH}/avetti.png`,
    projects: [
      {
        title: "E-commerce Platform Development",
        description: "Build a modern e-commerce platform with advanced features",
        techStack: ["React", "Node.js", "MongoDB", "Redis"],
        skills: ["Full Stack Development", "API Design", "Database Design"]
      }
    ]
  },
  {
    name: "Jupiter",
    logo: `${TECH_LOGOS_PATH}/jupiter.png`,
    projects: [
      {
        title: "FinTech App Development",
        description: "Develop a financial management application with real-time processing",
        techStack: ["React Native", "Spring Boot", "PostgreSQL"],
        skills: ["Mobile Development", "Financial Systems", "Security"]
      }
    ]
  },
  {
    name: "Accionlabs",
    logo: `${TECH_LOGOS_PATH}/accionlabs.png`,
    projects: [
      {
        title: "Cloud Infrastructure Automation",
        description: "Implement cloud automation solutions using AWS",
        techStack: ["AWS", "Terraform", "Docker", "Jenkins"],
        skills: ["Cloud Computing", "DevOps", "Infrastructure as Code"]
      }
    ]
  },
  {
    name: "Cars24",
    logo: `${TECH_LOGOS_PATH}/cars24.png`,
    projects: [
      {
        title: "Vehicle Management System",
        description: "Create a comprehensive vehicle tracking and management system",
        techStack: ["Python", "Django", "React", "PostgreSQL"],
        skills: ["System Design", "Real-time Processing", "Data Management"]
      }
    ]
  }
];

const managementCompanies: InternshipCompany[] = [
  {
    name: "Management Company 1",
    logo: `${MGMT_LOGOS_PATH}/IMG_4443.PNG`,
    projects: [
      {
        title: "Market Analysis Project",
        description: "Conduct comprehensive market research and strategy development",
        skills: ["Market Research", "Data Analysis", "Strategic Planning"]
      }
    ]
  },
  {
    name: "Management Company 2",
    logo: `${MGMT_LOGOS_PATH}/IMG_4444.JPG`,
    projects: [
      {
        title: "Business Development Strategy",
        description: "Develop business growth strategies for new market segments",
        skills: ["Business Strategy", "Market Analysis", "Project Management"]
      }
    ]
  },
  {
    name: "Management Company 3",
    logo: `${MGMT_LOGOS_PATH}/IMG_4445.JPG`,
    projects: [
      {
        title: "Operations Management",
        description: "Optimize business operations and implement improvements",
        skills: ["Process Optimization", "Resource Management", "Leadership"]
      }
    ]
  },
  {
    name: "Management Company 4",
    logo: `${MGMT_LOGOS_PATH}/IMG_4446.WEBP`,
    projects: [
      {
        title: "Digital Marketing Campaign",
        description: "Plan and execute digital marketing strategies",
        skills: ["Digital Marketing", "Campaign Management", "Analytics"]
      }
    ]
  },
  {
    name: "Management Company 5",
    logo: `${MGMT_LOGOS_PATH}/IMG_4447.PNG`,
    projects: [
      {
        title: "Financial Analysis",
        description: "Perform financial analysis and develop performance metrics",
        skills: ["Financial Analysis", "Reporting", "Business Intelligence"]
      }
    ]
  },
  {
    name: "Management Company 6",
    logo: `${MGMT_LOGOS_PATH}/IMG_4448.PNG`
  },
  {
    name: "Management Company 7",
    logo: `${MGMT_LOGOS_PATH}/IMG_4449.PNG`
  },
  {
    name: "Management Company 8",
    logo: `${MGMT_LOGOS_PATH}/IMG_4450.PNG`
  },
  {
    name: "Management Company 9",
    logo: `${MGMT_LOGOS_PATH}/IMG_4451.PNG`
  }
];

export const internshipConfigs: Record<string, InternshipConfig> = {
  home: {
    title: "Virtual Internship Program",
    subtitle: "Learn by Doing",
    description: "Work on real projects from leading companies and build your portfolio with hands-on experience",
    companies: [...techCompanies, ...managementCompanies.slice(0, 4)]
  },
  tech: {
    title: "Technology Virtual Internships",
    subtitle: "Real-World Tech Projects",
    description: "Build production-ready applications and features for leading tech companies",
    companies: techCompanies
  },
  management: {
    title: "Management Virtual Internships",
    subtitle: "Business Impact Projects",
    description: "Work on strategic business initiatives and gain real corporate experience",
    companies: managementCompanies
  }
};
