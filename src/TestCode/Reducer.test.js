import reducer, { getCartTotal } from "../Model/reducer";

describe("getCartTotal() Test", () => {
  let cart = [
    {
      title: "Test Title1",
      image: "Test Image1",
      price: 5,
      rating: 1,
      description: "Test Description1",
    },
    {
      title: "Test Title2",
      image: "Test Image2",
      price: 5,
      rating: 2,
      description: "Test Description2",
    },
    {
      title: "Test Title3",
      image: "Test Image3",
      price: 5,
      rating: 3,
      description: "Test Description3",
    },
  ];

  it("Calulates the total price for items in the cart", () => {
    expect(getCartTotal(cart)).toBe(15);
  });
});

describe("Reducer", () => {
  describe("Should return default state", () => {
    const newState = reducer(null, []);
    expect(newState).toEqual(null);
  });
  let state = {
    user: null,
    cart: [],
  };
  describe("ACTION: Adding items to cart", () => {
    let item = {
      id: "Test Id",
      title: "Test Title",
      image: "Test Image",
      price: 5,
      rating: 1,
      description: "Test Description",
    };
    let expectedState = {
      user: null,
      cart: [item],
    };
    const newState = reducer(state, {
      type: "ADD_TO_CART",
      item: item,
    });
    state = newState;
    expect(newState).toStrictEqual(expectedState);
  });

  describe("ACTION: Dropping items from the cart", () => {
    let item = {
      id: "Test Id",
      author: "Test Author",
      image: "Test Image",
      price: 3,
      rating: 100,
      description: "Test Description",
    };
    let expectedState = {
      user: null,
      cart: [],
    };
    const newState = reducer(state, {
      type: "REMOVE_FROM_CART",
      id: item.id,
    });
    expect(newState).toStrictEqual(expectedState);
  });

  describe("ACTION: Making the cart empty", () => {
    let item = {
      id: "Test Id",
      title: "Test Title",
      image: "Test Image",
      price: 3,
      rating: 1,
      description: "Test Description",
    };
    let expectedState = {
      user: null,
      cart: [],
    };
    const newState = reducer(state, {
      type: "EMPTY_CART",
      item: item,
    });
    state = newState;
    expect(newState).toStrictEqual(expectedState);
  });

  describe("ACTION: Setting up the user", () => {
    let user = {
      displayName: "Test user",
      uid: "Test Uid",
      email: "test@email.com ",
    };
    let expectedState = {
      user: user,
      cart: [],
    };
    const newState = reducer(state, {
      type: "SET_USER",
      user: user,
    });
    expect(newState).toStrictEqual(expectedState);
  });
});
