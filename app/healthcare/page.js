import React from "react";

import ProductListing from "@/src/components/ProductListing/ProductListing.js";
import Layout from "@/src/components/Layout/Layout";
export const metadata = {
  title: "healthcare",
};
const Healthcare = () => {
  return (
    <>
      <Layout>
        <ProductListing category="healthcare" />
      </Layout>
    </>
  );
};

export default Healthcare;
