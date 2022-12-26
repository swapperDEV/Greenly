import React, { useRef, useState, useEffect } from "react";
import styles from "./menu.module.scss";
import { Header } from "../../molecules/Header/Header";
import { NavbarList } from "../../molecules/NavbarList/NavbarList";
import { Spin as Hamburger } from "hamburger-react";

export const Navbar = () => {
  const [scrollPosition, setScrollPosition]: any = useState(0);
  const [menuClass, setMenuClass]: any = useState(`${styles.wrapper}`);
  const [navDisplay, changeNavDisplay] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const navToggle = () => {
    changeNavDisplay(!navDisplay);
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
    <>
      <div className={menuClass}>
        <div className={styles.underline}>
          <Header />
          <div className={styles.desktop}>
            <NavbarList type={"desktop"} />
          </div>
          <div className={styles.mobile}>
            <Hamburger
              distance="lg"
              size={30}
              toggled={navDisplay}
              toggle={navToggle}
            />
          </div>
        </div>
      </div>
      {navDisplay && (
        <div className={styles.navMobile}>
          <div className={styles.mobileList}>
            <NavbarList type="mobile" />
          </div>
        </div>
      )}
    </>
  );
};
