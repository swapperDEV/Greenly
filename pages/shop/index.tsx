import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import Head from "next/head";
import { ShopView } from "../../components/views/shop/ShopView";
const Shop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly Shop</title>
      </Head>
      <SiteTemplate view={<ShopView />} />
    </>
  );
};

export default Shop;
