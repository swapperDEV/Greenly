import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import Head from "next/head";
import { HomeView } from "../../components/views/home/HomeView";
import { OrdersView } from "../../components/views/orders/OrdersView";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly - Orders</title>
      </Head>
      <SiteTemplate view={<OrdersView />} />
    </>
  );
};

export default Home;
