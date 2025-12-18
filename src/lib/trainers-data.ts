import ankitImage from '@/assets/trainers/ankit_sharma_trainer.png';
import harshImage from '@/assets/trainers/harsh_jain_trainer.jpg';
import lokeshImage from '@/assets/trainers/lokesh_mathur_founder.jpg';
import mithunImage from '@/assets/trainers/mithun_trainer.jpg';
import naveenImage from '@/assets/trainers/naveen_jain_trainer.jpg';
import punitaImage from '@/assets/trainers/Punita Mam Photo.png';
import shubhamImage from '@/assets/trainers/shubham_lal_trainer.png';
import sumitImage from '@/assets/trainers/sumit_shukla_trainer.png';

// Company logos
import microsoftLogo from '@/assets/trainers/trainers_companies/Microsoft Logo - Edited.png';
import scaletrixLogo from '@/assets/trainers/trainers_companies/scaletrix_ai_logo - Edited.png';

export interface TrainerInfo {
  name: string;
  role: string;
  image: string;
  bio: string;
  experience?: string[];
  currentCompany?: string;
  companies?: string[];
  linkedin?: string;
  isFounder?: boolean;
  specializations?: string[];
}

export const trainersData: TrainerInfo[] = [
  {
    name: "Lokesh Mathur",
    role: "Founder",
    image: lokeshImage,
    bio: "A dynamic leader with 18+ years of experience across IT, education, and edtech. An IIM Calcutta Executive MBA and certified PMP®, CSM®, and SCJP 5.0, he has driven impactful career outcomes and strategic growth. From leading his entrepreneurial venture to senior roles at upGrad, Lokesh has consistently shaped 50000+ futures and transformed lives. He's pioneering tech-driven education strategies, passionate about mentoring and innovation. Lokesh combines a strategic mindset with a genuine commitment to empowering others, making him a true force for change in the world of learning and career.",
    isFounder: true,
    experience: [
      "18+ years in IT, Education & EdTech",
      "IIM Calcutta Executive MBA",
      "PMP®, CSM®, SCJP 5.0 Certified",
      "Former Senior Leader at upGrad",
      "Mentored 50000+ students"
    ],
    specializations: ["Educational Leadership", "Strategic Planning", "Technology Integration", "Career Development", "Mentoring"]
  },
  {
    name: "Shubham Lal",
    role: "Founder AI Linc, Software Developer II",
    image: shubhamImage,
    bio: "Shubham Lal, with 8 years at Microsoft since 2017, has contributed to major business verticals like Windows, Office 365, and Teams. He has mentored over 5,000 students, assisted 15+ ed-tech firms, and spoken at 60+ events on technology and career development. Shubham also runs a B2B venture supporting ed-tech companies with operational and product solutions.",
    currentCompany: "Microsoft",
    companies: [microsoftLogo],
    linkedin: "https://www.linkedin.com/in/shubhamlal/",
    experience: [
      "8 years at Microsoft (since 2017)",
      "Windows, Office 365, and Teams contributor",
      "Mentored 5,000+ students",
      "Assisted 15+ ed-tech firms",
      "60+ speaking events"
    ],
    specializations: ["AI", "Product Solutions", "Ed-Tech Operations", "Technology Leadership", "Career Development"]
  },
  {
    name: "Sumit Shukla",
    role: "Director AI",
    image: sumitImage,
    bio: "Sumit Shukla is a Data Science and Machine Learning instructor with 5+ years of experience at top e-learning firms and collaborations with leading universities and analytics companies. Delivered 20,000+ hours of instruction and recognized as a Subject Matter Expert. Featured on Josh Talk, with a full memoir on YouTube.",
    currentCompany: "Scaletrix.AI",
    companies: [scaletrixLogo],
    linkedin: "https://www.linkedin.com/in/ssumitshukla/",
    experience: [
      "5+ years in Data Science & ML instruction",
      "20,000+ hours of instruction delivered",
      "Subject Matter Expert",
      "Featured speaker on Josh Talk",
      "Collaborations with leading universities"
    ],
    specializations: ["Data Science", "Machine Learning", "AI", "Analytics", "E-Learning"]
  },
  {
    name: "Dr. Punita Chatwani",
    role: "NLP Master Trainer",
    image: punitaImage,
    bio: "Punita Chatwani is an internationally certified NLP Master Trainer, Emotional Intelligence Coach, and India's youngest NLP and Parenting Trainer. With over 12 years of experience, she delivers psychology-based and behavioural training across cultures and geographies, having worked with 200+ organisations including multinational companies, universities, colleges, and corporates worldwide.",
    linkedin: "https://www.linkedin.com/in/punita-chatwani/",
    experience: [
      "12+ years in NLP & Emotional Intelligence training",
      "Internationally certified NLP Master Trainer",
      "India's youngest NLP and Parenting Trainer",
      "Worked with 200+ organisations",
      "Global training delivery experience"
    ],
    specializations: ["NLP Training", "Emotional Intelligence", "Behavioral Training", "Parenting", "Psychology-Based Coaching"]
  }
];
