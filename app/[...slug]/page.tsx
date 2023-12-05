import React from "react";
import { Container } from "@mui/system";
import Layout from "../../src/components/Layout/Layout";
export const metadata = {
  title: "Contact",
};
export async function generateStaticParams() {
  const posts = 'about'

  return posts;
}
const profile = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <Layout>
        <Container className="text-center">
          <h2>{params?.slug} Page</h2>
          <p>This is Dynamic router page</p>
        </Container>
      </Layout>
    </>
  );
};

export default profile;
