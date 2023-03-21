import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Greeting component", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("Learn React", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
});
