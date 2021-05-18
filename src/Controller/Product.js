import React from "react";
import "../View/Product.css";
import PropTypes from "prop-types";
import { useStateValue } from "../Model/StateProvider";

function Product({ id, title, image, price, rating, description }) {
  const [{ user, cart }, dispatch] = useStateValue();

  const addToCart = () => {
    console.log(cart); // For Cheking if the function is working properly or not!
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>
          <strong> {title}</strong> : {description}
        </p>
        <p className="product__price">
          <small>$</small>
          <strong> {price} </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={id + i}>
                <strong>⭐</strong>
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="product image" />

      <button onClick={addToCart}> Add to Cart</button>
    </div>
  );
}
Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  description: PropTypes.string,
  hideButton: PropTypes.bool,
};
export default Product;
