import { shallow } from "enzyme";
import Login from "../Controller/Login";
import { StateProvider } from "../Model/StateProvider";
import reducer, { initialState } from "../Model/reducer";

const setUp = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Login />
    </StateProvider>
  );
  return component;
};
describe("Login Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe("Log in Component", () => {
    it("Should Render the checkout products in the checkout page Without Errors", () => {
      const checkoutProduct = component;
      expect(checkoutProduct.length).toBe(1);
    });
  });
});
