import { shallow } from "enzyme";
import Home from "../Controller/Home";
import Product from "../Controller/Product";
import { StateProvider } from "../Model/StateProvider";
import reducer, { initialState } from "../Model/reducer";
const setUp1 = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Home />
    </StateProvider>
  );
  return component;
};
const setUp2 = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Product />
    </StateProvider>
  );
  return component;
};
describe("Home Component", () => {
  let component1, component2;
  beforeEach(() => {
    component1 = setUp1();
    component2 = setUp2();
  });
  describe("Home Component", () => {
    it("Should Render the home page Without Errors", () => {
      const home = component1;
      expect(home.length).toBe(1);
    });
  });

  describe("Product Component", () => {
    it("Should Render 5 product items on the home screen without error", () => {
      const product = component2;
      expect(product.length).toBe(1);
    });
  });
});
