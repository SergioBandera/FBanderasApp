import { render } from "@testing-library/react";
import Header from "./Header";

describe(" test <Header /> component", () => {
  test("should render without exploding", () => {
    const { container } = render(<Header />);
    const elem = container.querySelector(".sdsd");
    expect(elem).toBeNull();
  });
  test("should render without exploding", () => {
    const { container } = render(<Header />);
    const elem = container.querySelector(".header");
    expect(elem).toBeTruthy();
    expect(elem).not.toBeNull();
  });
  test("should render without exploding", () => {
    const { container } = render(<Header />);
    const elem = container.querySelector(".header");
    expect(elem).not.toBeNull();
  });
});
