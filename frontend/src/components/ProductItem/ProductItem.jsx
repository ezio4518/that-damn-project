import React, { useContext, useState } from "react";
import "./ProductItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { FaIndianRupeeSign } from "react-icons/fa6";

const ProductItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="product-item">
      <div className="product-item-img-container">
        <img className="product-item-image" src={url + "/images/" + image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="product-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="product-item-info">
        <div className="product-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="product-item-description">{description}</p>
        <p className="product-item-price"><FaIndianRupeeSign className="rupee-symbol" />{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
