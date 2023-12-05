import React from "react";

import ProductListing from "@/src/components/ProductListing/ProductListing.js";
import Layout from "@/src/components/Layout/Layout";
import Link from "next/link";
import ProductDetailsPage from "@/src/components/ProductDetailsPage";
import { useParams, useRouter } from "next/navigation";
export const metadata = {
  title: "Product",
};
const Product = () => {
  // const params = useParams();
  // const query = useRouter();
  // const { id } = query;
  const id = 3;
  return (
    <>
      <Layout>
        <ProductDetailsPage id={id} />
      </Layout>
    </>
  );
};

export default Product;
