import ankitImage from '@/assets/trainers/ankit_sharma_trainer.png';
import harshImage from '@/assets/trainers/harsh_jain_trainer.jpg';
import lokeshImage from '@/assets/trainers/lokesh_mathur_founder.jpg';
import mithunImage from '@/assets/trainers/mithun_trainer.jpg';
import naveenImage from '@/assets/trainers/naveen_jain_trainer.jpg';

export interface TrainerInfo {
  name: string;
  role: string;
  image: string;
  bio: string;
  experience?: string[];
  currentCompany?: string;
  linkedin?: string;
  isFounder?: boolean;
  specializations?: string[];
}

export const trainersData: TrainerInfo[] = [
  {
    name: "Mithun S",
    role: "Technical Trainer",
    image: mithunImage,
    bio: "Mithun S is a Software Developer at Cisco, with an experience of building and maintaining 8+ applications that are actively used by millions of users worldwide. Beyond his professional contributions, Mithun is deeply engaged in the developer ecosystem through teaching, mentoring, and community initiatives. Has delivered tech talks, hands-on workshops at leading universities, and has trained over 20,000 students in India and overseas through major edtechs. His mentorship extends to major global hackathons, where he has also served as a judge and panelist.",
    currentCompany: "Cisco",
    linkedin: "https://www.linkedin.com/in/yesmithun/",
    specializations: ["Full Stack Development", "Cloud Technologies", "System Design", "Microservices"]
  },
  {
    name: "Naveen Jain",
    role: "Aptitude Trainer",
    image: naveenImage,
    bio: "Naveen Jain is an experienced and result-oriented Aptitude Trainer with expertise in Quantitative Aptitude, Logical Reasoning, and Verbal Ability. Skilled in simplifying complex concepts and delivering engaging sessions for students preparing for campus placements, competitive exams, and corporate training. Adept at designing practice modules, mock tests, and personalized learning strategies to enhance problem-solving speed and accuracy. Known for creating an interactive classroom environment that motivates learners to achieve their goals.",
    specializations: ["Placement Preparation", "Mock Tests", "Analytical Reasoning", "Data Interpretation"]
  },
  {
    name: "Harsh Jain",
    role: "Technical Trainer",
    image: harshImage,
    bio: "An experienced trainer who has mentored thousands of students through both online and offline programs. With a strong foundation in Data Structures & Algorithms (DSA) and Competitive Programming, specializing in building problem-solving skills that are crucial for coding interviews, academic excellence, and real-world challenges. Expertise spans across C++, Java, and Python, along with in-depth knowledge of Object-Oriented Programming (OOPs), Operating Systems (OS), Computer Networks (CN), Database Management Systems (DBMS), and SQL. Passionate about simplifying complex concepts and delivering structured, hands-on learning that creates lasting impact.",
    specializations: ["DSA", "Competitive Programming", "C++", "Java", "Python", "OOP"]
  },
  {
    name: "Ankit Sharma",
    role: "Aptitude Trainer",
    image: ankitImage,
    bio: "Experienced Aptitude Trainer with over 5 years of expertise in designing and delivering comprehensive placement and aptitude training programs. Proven track record of enhancing student learning through effective lesson planning, engaging content delivery, and consistent feedback implementation. Skilled in classroom management and career counseling, with a strong educational foundation in Mathematics.",
    experience: [
      "BIZOTIC",
      "Sharda University, AKGEC Ghaziabad",
      "ABES Engineering College Ghaziabad",
      "T.I.M.E Coaching Center, Greater Noida"
    ],
    specializations: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Interview Preparation"]
  },
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
  }
];
