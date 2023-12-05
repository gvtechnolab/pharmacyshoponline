"use client";
import React, { useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import LeftMenuDrawer from "../LeftMenuBar/LeftMenuDrawer.js";

export default function Layout({ children }) {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);

  return (
    <>
      <LeftMenuDrawer isLeftMenuOpen={isLeftMenuOpen} setIsLeftMenuOpen={setIsLeftMenuOpen} />
      <Header setIsLeftMenuOpen={setIsLeftMenuOpen} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
