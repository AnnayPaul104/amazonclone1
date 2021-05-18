import { shallow } from "enzyme";
import Payment from "../Controller/Payment";
import CheckoutProduct from "../Controller/CheckoutProduct";
import { StateProvider } from "../Model/StateProvider";
import reducer, { initialState } from "../Model/reducer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IehmsSDS4XEIVU2rkxLqZw5ZAHnBfDQE0nSLBBQEvjsjChPLARC7Tq1ibgRrrPZItjKQw2z0JEdfVzktk49E57h00BTkjSc0o"
);

const setUp1 = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <CheckoutProduct />
    </StateProvider>
  );
  return component;
};
const setUp2 = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </StateProvider>
  );
  return component;
};

describe("Payment Component", () => {
  let component1, component2;
  beforeEach(() => {
    component1 = setUp1();
    component2 = setUp2();
  });
  describe("CheckoutProduct Component", () => {
    it("Should Render the checkout products in the checkout page Without Errors", () => {
      const checkoutProduct = component1;
      expect(checkoutProduct.length).toBe(1);
    });
  });
  describe("Payment Component", () => {
    it("Should Render payment component without Errors", () => {
      const payment = component2;
      expect(payment.length).toBe(1);
    });
  });
});
