import type { NextPage } from "next";
import { SiteTemplate } from "../components/templates/SiteTemplate";

const Home: NextPage = () => {
  return (
    <>
      <SiteTemplate view="home" />
    </>
  );
};

export default Home;
