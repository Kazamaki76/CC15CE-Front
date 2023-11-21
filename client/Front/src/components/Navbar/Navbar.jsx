import React, { useState } from "react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import logo from "../../../public/img/logo.jpg";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {
const [open, setOpen] = useState(false)


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link className="link" to="/">
            <div className="logo">
              <img src={logo} alt="" height={50} width={50} />
            </div>
          </Link>
          <Link className="link" to="/products/1">
            <div className="store"> Store </div>
          </Link>
          <Link className="link" to="/products/2">
            <div className="store"> Contact </div>
          </Link>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div className="right">
          <div className="icons">
            <FavoriteBorderOutlinedIcon/>
            <Link className="link" to="/products/3">
              <div className="cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingCartIcon />
                <span>1</span>
              </div>
            </Link>
            <Link className="link" to="/products/4">
              <div className="store">
                <PersonOutlineIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
