import * as React from "react";
import { useSelector } from "react-redux";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SiteLogo from "../SiteLogo/SiteLogo.js";
import PsLink from "../PsLink/PsLink.js";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function Header({ setIsLeftMenuOpen }) {
  const cart = useSelector((state) => state.cart);
  const wishlistStore = useSelector((state) => state.wishlist);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <PsLink href="/profile">
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </PsLink>
      <PsLink href="/wishlist">
        <MenuItem onClick={handleMenuClose}>
          Wishlist
          {wishlistStore?.length > 0 ? (
            <Typography
              variant="string"
              sx={{
                background: "#198754",
                margin: "0 3px",
                height: "5px",
                width: "5px",
                borderRadius: "50%",
              }}
            ></Typography>
          ) : (
            ""
          )}
        </MenuItem>
      </PsLink>
      <PsLink href="/orders">
        <MenuItem onClick={handleMenuClose}>Orders</MenuItem>
      </PsLink>
      <PsLink href="javascript:void(0);">
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </PsLink>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 13 new notifications"
          color="inherit"
        >
          <PsLink href="/cart">
            <Badge badgeContent={cart?.length} color="error">
              <ShoppingCart />
            </Badge>
          </PsLink>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExpandMore />
        </IconButton>
        <p>More</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {/* old */}
      {/* <div className="container">
        <div class="row justify-content-between">
          <div class="col">
            <Link href="/">
              <Image src="/vercel.svg" width={100} height={60} />
            </Link>
          </div>
          <div class="col-6">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div class="col">Menu</div>
        </div>
      </div> */}
      {/* <Box> */}
      <AppBar position="sticky" sx={{ background: "none" }}>
        <Toolbar
          sx={{ justifyContent: "space-between", background: "#198754" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            // sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => setIsLeftMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <SiteLogo name="PharmacyShop" light inlineBlocked />
          </Typography>
          <Search sx={{ display: { xs: "none", sm: "block" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <PsLink
              href="/cart"
              sx={{ color: "#fff", ":hover": { color: "#fff" } }}
            >
              <IconButton
                size="large"
                aria-label="show 13 new notifications"
                color="inherit"
              >
                <Badge badgeContent={cart?.length} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </PsLink>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* </Box> */}
    </>
  );
}
