import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import Head from "next/head";
import { NewsletterView } from "../../components/views/code/NewsletterView";

const Newsletter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly Newsletter</title>
      </Head>
      <SiteTemplate view={<NewsletterView />} />
    </>
  );
};

export default Newsletter;
