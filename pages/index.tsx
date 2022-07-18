import type { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";
import { SiteTemplate } from "../components/templates/SiteTemplate";

const index: NextPage = () => {
  useEffect(() => {
    Router.push("/home");
  });
  return <></>;
};

export default index;
