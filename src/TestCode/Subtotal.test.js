import { shallow } from "enzyme";
import { StateProvider } from "../Model/StateProvider";
import reducer, { initialState } from "../Model/reducer";
import Subtotal from "../Controller/Subtotal";

const setUp = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Subtotal />
    </StateProvider>
  );
  return component;
};
describe("Subtotal Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe("Subtotal Component", () => {
    it("Should Render subtotal component without Errors", () => {
      const subtotal = component;
      expect(subtotal.length).toBe(1);
    });
  });
});
