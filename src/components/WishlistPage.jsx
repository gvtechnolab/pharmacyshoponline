"use client";
import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import PageTitle from "@/src/components/PageTitle/PageTitle";
import PsPageHeading from "@/src/components/PsPageHeading/PsPageHeading";
import PsBox from "@/src/components/PsBox/PsBox";
import { Products } from "@/src/utills/globalData";
import Grid from "@mui/material/Grid";
import UserProductItem from "@/src/components/UserProductItem/UserProductItem";
import NotFound from "@/src/components/NotFound/NotFound";

import {
  wishlistSlice,
  useSelector,
} from '@/lib/redux'


const WishlistPage = () => {
  const [wishlistData, setWishlistData] = useState([]);

  const wishlist = useSelector((state) => state.wishlist.value);

  useEffect(() => {
    let data = Products?.filter((item) => wishlist?.includes(item?.id));
    setWishlistData(data);
  }, [wishlist]);

  return (
    <>
      <Container sx={{ marginBottom: "15px" }}>
        <PsPageHeading>
          <h4>Wishlist</h4>
          <span>{wishlist?.length} Products</span>
        </PsPageHeading>
        {wishlistData?.length > 0 ? (
          <PsBox>
            <Stack spacing={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {wishlistData?.map((item, key) => (
                  <>
                    <Grid item xs={4} key={key}>
                      <UserProductItem item={item} productIn="wishlist" />
                    </Grid>
                  </>
                ))}
              </Grid>
            </Stack>
          </PsBox>
        ) : (
          <NotFound what="wishlist" />
        )}
      </Container>
    </>
  );
};

export default WishlistPage;
