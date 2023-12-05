import React from "react";
import { Container } from "@mui/system";
import Layout from "@/src/components/Layout/Layout";
import ProductDetailsPage from "@/src/components/ProductDetailsPage";
import { Products } from "@/src/utills/globalData";
export const metadata = {
  title: "Product Details page",
};
export async function generateStaticParams() {
  const posts = Products;

  return posts.map((post) => ({
    slug: post.id,
  }))
}
const profile = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Layout>
        {/* <Container className="text-center"> */}
          {/* <h2>{params?.id} Product</h2>
          <p>Product </p> */}
          <ProductDetailsPage id={params?.id?.[0]} />
        {/* </Container> */}
      </Layout>
    </>
  );
};

export default profile;
