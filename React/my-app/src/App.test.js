// to run this test use "npm run test"

import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("check for hello and image", () => {
//   render(<App />);
//   const helloElement = screen.getByText(/Hello/i);
//   const imgElement = screen.getByTitle(/Scenery/i);
//   expect(helloElement).toBeInTheDocument();
//   expect(imgElement).toBeInTheDocument();
// });

// test("check for image2", () => {
//   render(<App />);
//   const img2Element = screen.getByTitle(/flowers/i);
//   expect(img2Element).toBeInTheDocument();
// });

// test for Input Field

describe("UI Input field", () => {
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
});
