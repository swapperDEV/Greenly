import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import { useRouter } from "next/router";
import Head from "next/head";
import { CheckoutView } from "../../components/views/checkout/CheckoutView";
const Checkout: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly Checkout</title>
      </Head>
      <SiteTemplate view={<CheckoutView />}></SiteTemplate>
    </>
  );
};

export default Checkout;
