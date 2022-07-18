import React, { useRef, useState, useEffect } from "react";
import styles from "./menu.module.scss";
import { Header } from "../../molecules/Header/Header";
import { NavbarList } from "../../molecules/NavbarList/NavbarList";

export const Navbar = () => {
  const [scrollPosition, setScrollPosition]: any = useState(0);
  const [menuClass, setMenuClass]: any = useState(`${styles.wrapper}`);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollPosition > 1) {
      setMenuClass(`${styles.wrapper} ${styles.wrapperFixed}`);
    } else {
      setMenuClass(`${styles.wrapper}`);
    }
  }, [scrollPosition]);
  return (
    <div className={menuClass}>
      <div className={styles.underline}>
        <Header />
        <NavbarList />
      </div>
    </div>
  );
};
