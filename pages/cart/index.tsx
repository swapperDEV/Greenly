import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import Head from "next/head";
const Shop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly Shopping Cart</title>
      </Head>
      <SiteTemplate view="cart" />
    </>
  );
};

export default Shop;
