import React from "react";
import { Container } from "@mui/system";
import Layout from "../../src/components/Layout/Layout";
export const metadata = {
  title: "Contact",
};
const profile = () => {
  return (
    <>
      <Layout>

      <Container>
        Contact page
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          deserunt quibusdam quidem odit, voluptatibus enim suscipit fugit
          debitis labore repellendus molestias. Quis eveniet repellendus
          quisquam architecto consequuntur quos necessitatibus nostrum!
        </p>
      </Container>
      </Layout>
    </>
  );
};

export default profile;
