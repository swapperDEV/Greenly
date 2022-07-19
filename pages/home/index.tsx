import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly Home</title>
      </Head>
      <SiteTemplate view="home" />
    </>
  );
};

export default Home;
