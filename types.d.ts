import { StaticImageData } from "next/image";

interface DataDetail {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string[];
}

interface DataEducation {
  school: string;
  time: string;
  address: string;
  info: string;
}

interface LayoutProps {
  children: React.ReactNode;
}

interface DataProjects {
  index: number;
  title: string;
  link: string | null;
  image: string;
  description: string;
  tech: string[];
}
