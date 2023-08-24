// icons
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "portfolio", path: "/portfolio", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="fixed bottom-0 top-0 z-50 mt-auto flex h-max w-full flex-col items-center xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
      <div className="flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 p-16 px-4 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl ">
        {navData.map((item, index) => {
          return (
            <Link
              className={`${
                item.path === pathname && "text-accent"
              } transitition-all group relative flex items-center duration-300 ease-in-out hover:text-accent`}
              href={item.path}
              key={index}
            >
              <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                <div className="relative flex items-center rounded-md bg-white p-[6px] text-primary">
                  <div className="text-[12px] font-semibold capitalize leading-none">
                    {item.name}
                  </div>

                  <div className="absolute right-[-3px] h-0 w-0 rotate-45 transform border-l-[6px] border-t-[6px] border-transparent border-white"></div>
                </div>
              </div>
              <div>{item.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
