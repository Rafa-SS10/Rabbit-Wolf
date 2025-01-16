import Header from "./Header.jsx";
import { render } from "@testing-library/react";

describe("Header", () => {
 it("checks name", () => {
const {getByTestId} = render(<Header/>);
  const hName = getByTestId("name").textContent;
  expect(hName).toContain("Shopping");
 })
})