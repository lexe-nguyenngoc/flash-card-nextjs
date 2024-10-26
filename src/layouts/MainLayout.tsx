import Header from "@/components/Header";
import React from "react";

export interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
