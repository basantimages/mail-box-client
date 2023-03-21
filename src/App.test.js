import App from "./App";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";

describe("App component", () => {
  test("renders learn react link", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.queryByText("Welcome", { exact: false });
    expect(linkElement).not.toBeInTheDocument();
  });
});
