import type { NextPage } from "next";
import { SiteTemplate } from "../../components/templates/SiteTemplate";
import Head from "next/head";
import { LoginView } from "../../components/views/login/LoginView";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Greenly Login</title>
      </Head>
      <SiteTemplate view={<LoginView />} />
    </>
  );
};

export default Login;
