import React from "react";
import { Footer } from "../components/footer/Footer";
import { Menu } from "../components/menu/Menu";
import { HomeView } from "../views/home/HomeView";
import template from "./template.module.scss";
export const SiteTemplate = ({ view }: { view: string }) => {
  return (
    <div className={template.wrapper}>
      <Menu />
      {view === "home" && <HomeView />}
      <Footer />
    </div>
  );
};
