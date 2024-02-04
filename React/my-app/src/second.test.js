import { render, screen } from "@testing-library/react";
import App from "./App";

test("Check for Input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkPlaceholder = screen.getByPlaceholderText("Enter UserName");
  expect(checkInput).toBeInTheDocument();
  expect(checkPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "userName");
  expect(checkInput).toHaveAttribute("value", "Adam123");
  expect(checkInput).toHaveAttribute("id", "userID");
});
