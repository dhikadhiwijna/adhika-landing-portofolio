import { useAnalytics } from "@/data/firebase-config";
import { logEvent } from "firebase/analytics";
import Link from "next/link";
import {
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Socials = () => {
  const analytics = useAnalytics();

  const handleLinkClick = (link: string, value: number) => {
    logEvent(analytics, "select_content", {
      content_type: "link",
      content_id: value,
      value: link,
    });
  };

  return (
    <div className="flex items-center gap-x-5 text-3xl">
      <Link
        className="transition-all duration-300 hover:pb-1 hover:text-accent"
        href={"https://www.linkedin.com/in/adhika-adhiwijna-060296/"}
        target="_blank"
        onClick={() => handleLinkClick("linkedin", 1)}
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        className="transition-all duration-300  hover:pb-1 hover:text-accent"
        href={"https://www.instagram.com/dhikadhiwijna/"}
        target="_blank"
        onClick={() => handleLinkClick("instagram", 2)}
      >
        <RiInstagramLine />
      </Link>
      <Link
        className="transition-all duration-300  hover:pb-1 hover:text-accent"
        href={"https://twitter.com/DhikaAdhiwijna"}
        target="_blank"
        onClick={() => handleLinkClick("twitter", 3)}
      >
        <RiTwitterLine />
      </Link>
      <a
        className="shadow-0 relative rounded-lg border-2 border-accent/80 px-4 py-2 text-sm uppercase text-accent/80 transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-2xl hover:shadow-accent/30"
        href={"/Adhika_Adhiwijna_Frontend_Engineer.pdf"}
        download
        onClick={() => handleLinkClick("resume", 4)}
      >
        Resume
      </a>
    </div>
  );
};

export default Socials;
