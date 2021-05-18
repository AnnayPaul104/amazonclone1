import { shallow } from "enzyme";
import Order from "../Controller/Order";
import { StateProvider } from "../Model/StateProvider";
import reducer, { initialState } from "../Model/reducer";

const setUp = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Order />
    </StateProvider>
  );
  return component;
};
describe("Order Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe("Order Component", () => {
    it("Should render the order component without errors", () => {
      const order = component;
      expect(order.length).toBe(1);
    });
  });
});
