"use client";
import React, { useState, useEffect } from "react";
import {
    wishlistSlice,
    useSelector,
    useDispatch,
    selectCount,
    incrementAsync,
    incrementIfOddAsync,
  } from '@/lib/redux'
  
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PageTitle from "@/src/components/PageTitle/PageTitle";
import { Products } from "@/src/utills/globalData";
import PsPageHeading from "@/src/components/PsPageHeading/PsPageHeading";
import PsBox from "@/src/components/PsBox/PsBox";
import PsButton from "@/src/components/PsButton/PsButton";
import UserProductItem from "@/src/components/UserProductItem/UserProductItem";
import NotFound from "@/src/components/NotFound/NotFound";

const cart = () => {
  const cartlist = useSelector((state) => state.cart.value);

  let discountpPercentage = 5;
  let deliveryCharges = 100;
  const [discountedAmt, setDiscountedAmt] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    let mainTotal = 0;
    cartlist?.map((cart) =>
      Products?.filter((product) => {
        if (product?.id === cart?.id) {
          let subTotal = parseFloat(product?.price) * cart?.qty;
          mainTotal = mainTotal + subTotal;
        }
      })
    );
    setCartTotal(mainTotal);
    setDiscountedAmt((mainTotal / 100) * discountpPercentage);
    setGrandTotal(cartTotal - discountedAmt + deliveryCharges);
  }, [cartlist, cartTotal]);

  return (
    <>

      <Container sx={{ marginBottom: "15px" }}>
        <PsPageHeading>
          <h4>Cart</h4>
          <span>{cartlist?.length} Products</span>
        </PsPageHeading>
        {cartlist?.length > 0 ? (
          <PsBox>
            <Stack spacing={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid
                  item
                  xs={8}
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="space-between"
                >
                  {cartlist?.map((item, key) => (
                    <>
                      <UserProductItem item={item} productIn="cart" key={key} />
                    </>
                  ))}
                </Grid>
                <Grid item xs={4}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography component="div" variant="h6">
                        Price Details
                      </Typography>
                      <Divider />
                      <List
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                      >
                        <ListItem
                          disableGutters
                          secondaryAction={<div>₹{cartTotal}</div>}
                        >
                          <ListItemText primary={`Price`} />
                        </ListItem>
                        <ListItem
                          disableGutters
                          secondaryAction={<div>₹{deliveryCharges}</div>}
                        >
                          <ListItemText primary={`Delivery Charges`} />
                        </ListItem>
                        <ListItem
                          disableGutters
                          secondaryAction={<div>{discountpPercentage}%</div>}
                        >
                          <ListItemText primary={`Discount`} />
                        </ListItem>
                        <Divider color="lightgreen" />
                        <ListItem
                          disableGutters
                          secondaryAction={<div>₹{grandTotal}</div>}
                        >
                          <ListItemText primary={`Total`} />
                        </ListItem>
                      </List>
                      <PsButton sx={{ width: "100%" }}>Place Order</PsButton>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Stack>
          </PsBox>
        ) : (
          <NotFound what="cart" />
        )}
      </Container>
    </>
  );
};

export default cart;
