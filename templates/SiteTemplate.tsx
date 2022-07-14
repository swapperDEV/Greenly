import React from "react";
import { Footer } from "../components/footer/Footer";
import { Menu } from "../components/menu/Menu";
import { HomeView } from "../views/home/HomeView";
export const SiteTemplate = ({ view }: { view: string }) => {
  return (
    <div>
      <Menu />
      {view === "home" && <HomeView />}
      <Footer />
    </div>
  );
};
