export const initialState = {
  user: null,
  cart: [],
};

//Selector
export const getCartTotal = (cart) =>
  cart.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action); // For checking if the function is working properly or not!
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove item, id:  ${action.id} does not exist in the cart`
        );
      }

      return {
        ...state,
        cart: newCart,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
