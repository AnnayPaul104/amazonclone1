import { shallow } from "enzyme";
import CheckoutProduct from "../Controller/CheckoutProduct";
import { StateProvider } from "../Model/StateProvider";
import reducer, { initialState } from "../Model/reducer";
import { checkProps } from "./utils";

const setUp = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <CheckoutProduct />
    </StateProvider>
  );
  return component;
};
describe("Checkout Product Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe("Checkout Product Component", () => {
    it("Should Render the checkout products in the checkout page Without Errors", () => {
      const checkoutProduct = component;
      expect(checkoutProduct.length).toBe(1);
    });
  });
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        id: "Test id",
        title: "Test title",
        image: "Test image",
        price: 20,
        rating: 3,
        description: "Test Description",
        hideButton: true,
      };
      let propsErrors = checkProps(CheckoutProduct, expectedProps);
      expect(propsErrors).toBeUndefined();
    });
  });
});
