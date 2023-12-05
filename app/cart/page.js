import React from "react";

import CartPage from "@/src/components/CartPage";
import Layout from "@/src/components/Layout/Layout";
export const metadata = {
  title: "Cart",
};
const cart = () => {
  return (
    <>
      <Layout>
        <CartPage />
      </Layout>
    </>
  );
};

export default cart;
