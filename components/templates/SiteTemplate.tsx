import React from "react";
import { Footer } from "../organisms/Footer/Footer";
import { Navbar } from "../organisms/Navbar/Navbar";
import { HomeView } from "../../views/home/HomeView";
import template from "./template.module.scss";
export const SiteTemplate = ({ view }: { view: string }) => {
  return (
    <div className={template.wrapper}>
      <Navbar />
      {view === "home" && <HomeView />}
      <Footer />
    </div>
  );
};
