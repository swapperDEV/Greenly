import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import { useRouter } from "next/router";
import Head from "next/head";
const Checkout: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly Checkout</title>
      </Head>
      <SiteTemplate view="checkout"></SiteTemplate>
    </>
  );
};

export default Checkout;
