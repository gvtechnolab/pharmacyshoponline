"use client";
import React from "react";

import NotFound from "@/src/components/NotFound/NotFound";
import Layout from "@/src/components/Layout/Layout";
export const metadata = {
  title: "404 - Page not found",
};
const PageNotFound = () => {
  return (
    <>
      <Layout>
        <NotFound what="page" />
      </Layout>
    </>
  );
};

export default PageNotFound;
