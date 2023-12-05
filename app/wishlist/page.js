import React from "react";
import { Container } from "@mui/system";
import Layout from "../../src/components/Layout/Layout";
import WishlistPage from "../../src/components/WishlistPage";

export const metadata = {
  title: "Wishlist",
};
const profile = () => {
  return (
    <>
      <Layout>
        <WishlistPage />{" "}
      </Layout>
    </>
  );
};

export default profile;
