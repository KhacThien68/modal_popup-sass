import React from "react";
import Footer from "./Footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      <div style={{flex: 1}}>
      <Header />
      <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
