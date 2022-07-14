import type { NextPage } from "next";
import { SiteTemplate } from "../templates/SiteTemplate";

const Home: NextPage = () => {
  return (
    <>
      <SiteTemplate view="home" />
    </>
  );
};

export default Home;
