import { shallow } from "enzyme";
import Product from "../Controller/Product";
import { StateProvider } from "../Model/StateProvider";
import reducer, { initialState } from "../Model/reducer";
import { checkProps } from "./utils";

const setUp = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Product />
    </StateProvider>
  );
  return component;
};
describe("Product Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe("Product Component", () => {
    it("Should Render product component without Errors", () => {
      const product = component;
      expect(product.length).toBe(1);
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
      let propsErrors = checkProps(Product, expectedProps);
      expect(propsErrors).toBeUndefined();
    });
  });
});
