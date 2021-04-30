import React from "react";
import "../View/CheckoutProduct.css";
import { useStateValue } from "../Model/StateProvider";

function CheckoutProduct({
  id,
  title,
  image,
  price,
  rating,
  description,
  hideButton,
}) {
  const [{ user, cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="Product Image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          {" "}
          <strong>{title}</strong> : {description}{" "}
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={id + "" + i}>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
