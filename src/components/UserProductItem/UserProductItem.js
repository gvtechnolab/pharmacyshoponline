import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import BookmarkRemove from "@mui/icons-material/BookmarkRemoveTwoTone";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircle from "@mui/icons-material/RemoveCircleTwoTone";
import {
  wishlistSlice,
  useSelector,
  useDispatch,
  selectCount,
  incrementAsync,
  incrementIfOddAsync,
} from '@/lib/redux'

// import { bindActionCreators } from "redux";
// import { actionCreators } from "../../redux";
import { assetsPrefix } from "../../utills/constants";
import { Products } from "../../utills/globalData";
import { useRouter } from "next/router";
import Styles from "./UserProductItem.module.css";

const UserProductItem = ({ item, productIn }) => {
  const router = useRouter();

  const [itemData, setItemData] = useState([]);
  const [itemQty, setItemQty] = useState(0);

  const cartStore = useSelector((state) => state.cart);
  const wishlistStore = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  // const { removefromwishlist, addtocart, removefromcart, decrementfromcart } =
  //   bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const data = Products?.filter((product) => product?.id === item?.id);
    setItemData(data);

    const qty = cartStore?.filter((cart) => cart?.id === item?.id);
    setItemQty(qty[0]?.qty);
  }, [cartStore, wishlistStore]);

  return (
    <>
      <Card
        className={Styles.card}
        sx={{
          width: 370,
          height: 185,
          display: "flex",
          position: "relative",
          marginBottom: "8px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 150, height: 185 }}
          image={`${assetsPrefix}${itemData?.[0]?.img}`}
          alt="image"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            sx={{
              flex: "1 0 auto",
              textTransform: "capitalize",
              cursor: "pointer",
              padding: "24px 15px 10px 15px",
            }}
            onClick={() => router.push(`/product/${itemData?.[0]?.id}`)}
          >
            <Typography
              component="div"
              variant="subtitle1"
              color="text.primary"
              title={itemData?.[0]?.name.replaceAll("_", " ")}
            >
              {`${itemData?.[0]?.name.replaceAll("_", " ").slice(0, 30)}...`}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {itemData?.[0]?.category}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.primary"
              component="div"
            >
              ₹{itemData?.[0]?.price}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              pl: 1,
              pb: 1,
            }}
          >
            {productIn === "wishlist" ? (
              <Button
                variant="text"
                color="success"
                onClick={() => {
                  addtocart({ id: itemData[0]?.id, qty: 1 });
                  removefromwishlist(itemData[0]?.id);
                }}
              >
                Move to cart
              </Button>
            ) : (
              <>
                <IconButton
                  aria-label="decrementfromcart"
                  color="success"
                  onClick={() =>
                    decrementfromcart({ id: itemData[0]?.id, qty: 1 })
                  }
                  disabled={itemQty <= 0}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1" color="text.secondary">
                  {itemQty}
                </Typography>
                <IconButton
                  aria-label="incrementtocart"
                  color="success"
                  onClick={() => addtocart({ id: itemData[0]?.id, qty: 1 })}
                >
                  <AddIcon />
                </IconButton>
              </>
            )}
            <IconButton
              aria-label="Example"
              className={Styles.removeItemButton}
              title={`Remove from ${
                productIn === "wishlist" ? "Wishlist" : "Cart"
              }`}
              onClick={() => {
                if (productIn === "wishlist") {
                  removefromwishlist(itemData[0]?.id);
                } else if (productIn === "cart") {
                  removefromcart({ id: itemData[0]?.id });
                }
              }}
              sx={{
                position: "absolute",
                top: "3px",
                right: "3px",
                color: "lightgrey",
              }}
            >
              {productIn === "wishlist" ? <BookmarkRemove /> : <RemoveCircle />}
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default UserProductItem;
