import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import Head from "next/head";
import { CartView } from "../../components/views/cart/CartView";
const Shop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly Shopping Cart</title>
      </Head>
      <SiteTemplate view={<CartView />} />
    </>
  );
};

export default Shop;
