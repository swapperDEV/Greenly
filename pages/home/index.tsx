import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import Head from "next/head";
import { HomeView } from "../../components/views/home/HomeView";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly Home</title>
      </Head>
      <SiteTemplate view={<HomeView />} />
    </>
  );
};

export default Home;
