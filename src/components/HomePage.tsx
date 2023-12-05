"use client";
/* Components */
import styles from "../src/styles/Home.module.css";
import Container from "@mui/material/Container";
import HomeCarousel from "@/src/components/HomeCarousel/HomeCarousel";
import CategoryCarousel from "@/src/components/CategoryCarousel/CategoryCarousel";
import ColumnBanner from "@/src/components/ColumnBanner/ColumnBanner";
import ProductCarousel from "@/src/components/ProductCarousel/ProductCarousel";
import ContactSection from "@/src/components/ContactSection/ContactSection";
import PageTitle from "@/src/components/PageTitle/PageTitle";
import Layout from "./Layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <Container>
        {/* <PageTitle title="Pharmnacy Shop" /> */}
        <HomeCarousel />
        <CategoryCarousel />
        <ColumnBanner />
        <ProductCarousel />
        <ContactSection />
      </Container>
    </Layout>
  );
}

