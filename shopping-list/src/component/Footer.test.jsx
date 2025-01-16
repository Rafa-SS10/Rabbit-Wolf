import Footer from "./Footer.jsx";
import { render } from "@testing-library/react";
 
describe('Footer', () => {
    it("checks text", () => {
      const items =[
        { id: 1, packed: true },
        { id: 2, packed: false },
        { id: 3, packed: true }
      ];
      const {getByTestId} = render(<Footer items={items} />);
      const countItems = getByTestId("count").textContent;
      expect(countItems).toEqual("Total Item: 3----Completed Item: 2-- 67%");
    })
    })