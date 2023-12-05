"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LocalOffer from "@mui/icons-material/LocalOffer";
import Bookmark from "@mui/icons-material/Bookmark";
import Star from "@mui/icons-material/Star";

// import { bindActionCreators } from "@reduxjs/toolkit";
import { Products } from "../utills/globalData";
import { assetsPrefix } from "../utills/constants";
import { OfferDetails } from "../utills/globalData";
import {
  cartSlice,
  wishlistSlice,
  useSelector,
  useDispatch,
  addtocart,
  decrementfromcart,
  addtowishlist,
  removefromwishlist,
} from "@/lib/redux";

const ProductDetailsPage = ({ id }) => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const cartlist = useSelector((state) => state.cart.value);

  const router = useRouter();

  const [addWish, SetAddWish] = useState(wishlist.includes(id));
  const [productData, setProductData] = useState();
  const cartData = cartlist?.find((cart) => cart?.id === id);

  const dispatch = useDispatch();
  //   const { addtocart, decrementfromcart, addtowishlist, removefromwishlist } =
  //     bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const data = Products?.find((product) => product?.id === id);
    console.log("pro", id, data);
    setProductData(data);
  }, [id]);

  const addToWishlistFunction = (prodId) => {
    if (!addWish) {
      SetAddWish(true);
      dispatch(wishlistSlice.actions.addtowishlist(prodId));
    } else if (addWish) {
      SetAddWish(false);
      dispatch(wishlistSlice.actions.removefromwishlist(prodId));
    }
  };

  return (
    <>
      <Container sx={{ position: "relative", marginY: "20px" }}>
        <Grid container>
          <Grid item xs={2}>
            {[...Array(3)].map((x, i) => (
              <CardMedia
                component="img"
                image={`${assetsPrefix}${productData?.img}`}
                alt="image"
                className="subImages"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "8px",
                  margin: "5px",
                  cursor: "pointer",
                }}
              />
            ))}
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              image={`${assetsPrefix}${productData?.img}`}
              alt="image"
              className="mainImg"
              sx={{
                width: 320,
                height: 420,
                borderRadius: "8px",
                margin: "5px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="overline">{productData?.category}</Typography>
            <Typography
              variant="h5"
              sx={{ textTransform: "capitalize" }}
              gutterBottom
            >
              {productData?.name.replaceAll("_", " ")}
            </Typography>
            <Typography variant="body2" sx={{ margin: "10px 0" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
            <Box
              sx={{ display: "flex", margin: "10px 0", alignItems: "center" }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#198754",
                  background: "#dbebe1",
                  padding: "3px",
                  borderRadius: "3px",
                }}
              >
                {productData?.ratings}
                <Star sx={{ fontSize: "13px", verticalAlign: "text-top" }} />
              </Typography>
              <Typography sx={{ padding: "3px" }}>
                & {productData?.reviews} Reviews
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", margin: "10px 0", alignItems: "center" }}
            >
              <Typography variant="h5" sx={{ padding: "0 5px" }}>
                ₹{productData?.price}
              </Typography>
              <Typography
                variant="string"
                color="lightgrey"
                sx={{ textDecorationLine: "line-through" }}
              >
                ₹{productData?.originalPrice}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ padding: "0 5px", color: "#198754", fontWeight: "bold" }}
              >
                5% Off
              </Typography>
            </Box>
            <List>
              {OfferDetails?.map((item) => (
                <ListItem disablePadding>
                  <ListItemIcon>
                    <LocalOffer color="success" sx={{ fontSize: "17px" }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">
                      <b>{item?.name}</b>
                      {` ${item?.percentage}% Instant discount on ${item?.bank} ${item?.type} Transactions`}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 0",
                alignItems: "center",
              }}
            >
              {cartData?.qty > 0 ? (
                <ButtonGroup
                  aria-label="small button group"
                  color="success"
                  variant="outlined"
                  fullWidth
                  sx={{ width: "50%" }}
                >
                  <Button
                    key="remove"
                    onClick={() =>
                      dispatch(
                        cartSlice.actions.decrementfromcart({
                          id: productData?.id,
                          qty: 1,
                        })
                      )
                    }
                  >
                    -
                  </Button>
                  <Button key="qty" disabled>
                    {cartData?.qty || 0}
                  </Button>
                  <Button
                    key="add"
                    onClick={() =>
                      dispatch(
                        cartSlice.actions.addtocart({
                          id: productData?.id,
                          qty: 1,
                        })
                      )
                    }
                  >
                    +
                  </Button>
                </ButtonGroup>
              ) : (
                <Button
                  variant="outlined"
                  color="success"
                  fullWidth
                  sx={{ width: "50%" }}
                  onClick={() => {
                    dispatch(
                      cartSlice.actions.addtocart({
                        id: productData?.id,
                        qty: 1,
                      })
                    );
                  }}
                >
                  Add to cart
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
        <IconButton
          size="large"
          aria-label="wishlistbutton"
          color="inherit"
          title="Add to Wishlist"
          sx={{
            position: "absolute",
            right: "3px",
            top: "3px",
            color: addWish ? "green" : "lightgrey",
            // backgroundColor: "rgba(25, 135, 84, 0.2)",
          }}
          onClick={() => {
            addToWishlistFunction(productData?.id);
          }}
        >
          <Bookmark />
        </IconButton>
      </Container>
    </>
  );
};

export default ProductDetailsPage;
