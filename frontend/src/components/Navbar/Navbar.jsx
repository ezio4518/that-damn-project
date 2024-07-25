import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";

const Navbar = ({ setShowLogin }) => {
  const [products, setProducts] = useState("home");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-products">
        <Link
          to="/"
          onClick={() => setProducts("home")}
          className={products === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-products"
          onClick={() => setProducts("products")}
          className={products === "products" ? "active" : ""}
        >
          products
        </a>

        <a
          href="#footer"
          onClick={() => setProducts("contact-us")}
          className={products === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <FaShoppingCart className="cart-icon" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <RiAccountCircleFill className="profile-icon" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
