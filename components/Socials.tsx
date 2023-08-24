import Link from "next/link";
import {
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Socials = () => {
  const downloadResume = () => {
    const pdfUrl = "@/public/Adhika_Adhiwijna_Frontend_Engineer.pdf";
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-x-5 text-3xl">
      <Link
        className="transition-all duration-300 hover:pb-1 hover:text-accent"
        href={"https://www.linkedin.com/in/adhika-adhiwijna-060296/"}
        target="_blank"
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        className="transition-all duration-300  hover:pb-1 hover:text-accent"
        href={"https://www.instagram.com/dhikadhiwijna/"}
        target="_blank"
      >
        <RiInstagramLine />
      </Link>
      <Link
        className="transition-all duration-300  hover:pb-1 hover:text-accent"
        href={"https://twitter.com/DhikaAdhiwijna"}
        target="_blank"
      >
        <RiTwitterLine />
      </Link>
      <a
        className="shadow-0 relative rounded-lg border-2 border-accent/80 px-4 py-2 text-sm uppercase text-accent/80 transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-2xl hover:shadow-accent/30"
        href={"/Adhika_Adhiwijna_Frontend_Engineer.pdf"}
        download
      >
        Resume
      </a>
    </div>
  );
};

export default Socials;
