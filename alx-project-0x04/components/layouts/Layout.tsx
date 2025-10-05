import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { LayoutProps } from '../../interfaces';



const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;