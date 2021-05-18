import { shallow } from "enzyme";
import Order from "../Controller/Order";
import Orders from "../Controller/Orders";
import { StateProvider } from "../Model/StateProvider";
import reducer, { initialState } from "../Model/reducer";

const setUp1 = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Order />
    </StateProvider>
  );
  return component;
};
const setUp2 = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Orders />
    </StateProvider>
  );
  return component;
};
describe("Orders Component", () => {
  let component1, component2;
  beforeEach(() => {
    component1 = setUp1();
    component2 = setUp2();
  });
  describe("Order Component", () => {
    it("Should render the order component without errors", () => {
      const order = component1;
      expect(order.length).toBe(1);
    });
  });
  describe("Orders Component", () => {
    it("Should Render the orders component without errors", () => {
      const orders = component2;
      expect(orders.length).toBe(1);
    });
  });
});
