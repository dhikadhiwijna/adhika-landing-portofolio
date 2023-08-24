import { Rubik } from "next/font/google";
//import font calibre

import Nav from "./Nav";
import Header from "./Header";
import { LayoutProps } from "@/types";

const sora = Rubik({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`bg-primary text-white ${sora.variable} relative font-sora`}
    >
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
