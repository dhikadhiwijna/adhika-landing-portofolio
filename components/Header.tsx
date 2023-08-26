import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-50 flex w-full items-center px-16 xl:h-[90px] xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-6 py-8 lg:flex-row">
          <Link href="/">
            <div className="hover: relative cursor-pointer text-2xl transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:bg-accent xl:text-3xl">
              Adhika <span className="font-light">Adhiwijna</span>
              <span className="text-accent">.</span>
            </div>
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
