import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="pt-24">{children}</main>
    </>
  );
};

export default Layout;