import React from "react";
import { Footer } from "../organisms/Footer/Footer";
import { Navbar } from "../organisms/Navbar/Navbar";
import { HomeView } from "../views/home/HomeView";
import { ShopView } from "../views/shop/ShopView";
import { AnimatePresence } from "framer-motion";
import template from "./template.module.scss";
export const SiteTemplate = ({ view }: { view: string }) => {
  return (
    <div className={template.wrapper}>
      <Navbar />
      <div className={template.content}>
        <AnimatePresence exitBeforeEnter>
          {view === "home" && <HomeView />}
          {view === "shop" && <ShopView />}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};
