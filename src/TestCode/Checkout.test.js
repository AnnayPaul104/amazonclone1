import { shallow } from "enzyme";
import Checkout from "../Controller/Checkout";
import CheckoutProduct from "../Controller/CheckoutProduct";
import Subtotal from "../Controller/Subtotal";
import { StateProvider } from "../Model/StateProvider";
import reducer, { initialState } from "../Model/reducer";
const setUp1 = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Checkout />
    </StateProvider>
  );
  return component;
};
const setUp2 = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <CheckoutProduct />
    </StateProvider>
  );
  return component;
};
const setUp3 = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Subtotal />
    </StateProvider>
  );
  return component;
};
describe("Checkout Component", () => {
  let component1, component2, component3;
  beforeEach(() => {
    component1 = setUp1();
    component2 = setUp2();
    component3 = setUp3();
  });
  describe("Checkout Component", () => {
    it("Should Render the checkout page Without Errors", () => {
      const checkout = component1;
      expect(checkout.length).toBe(1);
    });
  });

  describe("CheckoutProduct Component", () => {
    it("Should checked out products on the checked out page without error", () => {
      const checkoutProduct = component2;
      expect(checkoutProduct.length).toBe(1);
    });
  });

  describe("Subtotal Component", () => {
    it("Should subtotal on the check out page without error", () => {
      const subtotal = component3;
      expect(subtotal.length).toBe(1);
    });
  });
});
