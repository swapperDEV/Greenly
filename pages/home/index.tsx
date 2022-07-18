import type { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";
import { SiteTemplate } from "../../components/templates/SiteTemplate";

const Home: NextPage = () => {
  return (
    <>
      <SiteTemplate view="home" />
    </>
  );
};

export default Home;
