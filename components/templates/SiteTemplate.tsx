import React from "react";
import { Footer } from "../organisms/Footer/Footer";
import { Navbar } from "../organisms/Navbar/Navbar";
import { HomeView } from "../views/home/HomeView";
import { ShopView } from "../views/shop/ShopView";
import { AnimatePresence } from "framer-motion";
import template from "./template.module.scss";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: orange,
    secondary: green,
  },
});
export const SiteTemplate = ({ view }: { view: string }) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
