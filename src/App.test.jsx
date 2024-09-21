import { render, screen } from "@testing-library/react";
import App from "./App";

test("OpenAI", () => {
  render(<App />);
  const linkElement = screen.getByText(/OpenAI/i);
  expect(linkElement).toBeInTheDocument();
});
