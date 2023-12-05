import React, { useState, useEffect } from "react";
import Image from "next/image";
import PsLink from "../PsLink/PsLink";
import pagenotfound from "../../../public/assets/svgs/404image.svg";
import emptycart from "../../../public/assets/svgs/emptycart.svg";
import emptywishlist from "../../../public/assets/svgs/emptywishlist.svg";

const NotFound = ({ what }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    if (what === "page") {
      setContent({
        img: pagenotfound,
        msg: "Sorry, Page not found",
        desc: `The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.`,
        linkText:"Back to home"
      });
    } else if (what === "cart") {
      setContent({
        img: emptycart,
        msg: "Oh, Missing items in your cart",
        desc: "",
        linkText:"Shop now"
      });
    } else if (what === "wishlist") {
      setContent({
        img: emptywishlist,
        msg: "Still, You're not wishlisted any item",
        desc: "",
        linkText:"Shop now"
      });
    }
  }, [what]);

  return (
    <div className="text-center mx-auto py-5 my-5">
      <Image
        src={content?.img}
        height={200}
        width={200}
        className="my-5"
      ></Image>
      <h5>{content?.msg}</h5>
      <p className="lg:w-2/3 mx-auto my-2 leading-relaxed text-base">
        {content?.desc}
      </p>
      <PsLink href="/">← {content?.linkText}</PsLink>
    </div>
  );
};

export default NotFound;
