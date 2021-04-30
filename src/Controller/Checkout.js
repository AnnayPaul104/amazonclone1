import React from "react";
import "../View/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../Model/StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ user, cart }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout Advertisement Image"
        />
        <h2 className="checkout__title">Your Cart Items</h2>

        {cart?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            description={item.description}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
