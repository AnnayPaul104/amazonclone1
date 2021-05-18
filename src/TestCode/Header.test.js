import { shallow } from "enzyme";
import Header from "../Controller/Home";
import { StateProvider } from "../Model/StateProvider";
import reducer, { initialState } from "../Model/reducer";
const setUp = () => {
  let component = shallow(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Header />
    </StateProvider>
  );
  return component;
};

describe("Home Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  describe("Header Component", () => {
    it("Should Render the Header Without Errors", () => {
      const header = component;
      expect(header.length).toBe(1);
    });
  });
});
