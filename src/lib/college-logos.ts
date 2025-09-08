import AGM from '../assets/college_logos/AGM LOGO.jpeg';
import APShah from '../assets/college_logos/AP-Shah.webp';
import Ajeenkya from '../assets/college_logos/Ajeenkya dy patil.jpeg';
import Atharva from '../assets/college_logos/Atharva College of Engineering.png';
import BEC from '../assets/college_logos/BEC, Bagalkot.avif';
import DYPatil from '../assets/college_logos/DY Patil University.jpg';
import KRMangalam from '../assets/college_logos/K R Mangalam.jpeg';
import KLE from '../assets/college_logos/KLE, Belgaum.jpeg';
import LNMIIT from '../assets/college_logos/LNMIIT.jpg';
import MGM from '../assets/college_logos/MGM Logo.jpeg';
import SGBIT from '../assets/college_logos/SGBIT LOGO.jpeg';
import Seamedu from '../assets/college_logos/Seamedu.jpg';
import Shridevi from '../assets/college_logos/Shridevi logo.avif';
import SwamiVivekanand from '../assets/college_logos/Swami Vivekanand Group of Institution.jpg';
import Viva from '../assets/college_logos/Viva college.png';
import WCTM from '../assets/college_logos/WCTM.webp';
import Sharda from '../assets/college_logos/sharda university.jpeg';

export const collegeLogos = [
  {
    name: "AGM",
    logo: AGM
  },
  {
    name: "AP Shah",
    logo: APShah
  },
  {
    name: "Ajeenkya DY Patil",
    logo: Ajeenkya
  },
  {
    name: "Atharva College of Engineering",
    logo: Atharva
  },
  {
    name: "BEC Bagalkot",
    logo: BEC
  },
  {
    name: "DY Patil University",
    logo: DYPatil
  },
  {
    name: "KR Mangalam",
    logo: KRMangalam
  },
  {
    name: "KLE Belgaum",
    logo: KLE
  },
  {
    name: "LNMIIT",
    logo: LNMIIT
  },
  {
    name: "MGM",
    logo: MGM
  },
  {
    name: "SGBIT",
    logo: SGBIT
  },
  {
    name: "Seamedu",
    logo: Seamedu
  },
  {
    name: "Shridevi",
    logo: Shridevi
  },
  {
    name: "Swami Vivekanand Group",
    logo: SwamiVivekanand
  },
  {
    name: "Viva College",
    logo: Viva
  },
  {
    name: "WCTM",
    logo: WCTM
  },
  {
    name: "Sharda University",
    logo: Sharda
  }
];

// Duplicate the array to ensure smooth infinite scroll
export const duplicatedCollegeLogos = [...collegeLogos, ...collegeLogos];
