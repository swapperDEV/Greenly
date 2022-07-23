import type { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";

const Index: NextPage = () => {
  useEffect(() => {
    Router.push("/home");
  });
  return <></>;
};

export default Index;
