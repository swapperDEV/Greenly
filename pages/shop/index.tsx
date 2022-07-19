import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import Head from "next/head";
const Shop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly Shop</title>
      </Head>
      <SiteTemplate view="shop" />
    </>
  );
};

export default Shop;
