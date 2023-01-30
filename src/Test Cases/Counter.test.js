import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Components/Counter";
// Cleanup after every render
afterEach(cleanup);

// Check state value on first render
it("initial render", () => {
  render(<Counter />);
  expect(screen.getByTestId("counter")).toHaveTextContent(1);
});

// Check state value when user press increment button
it("increments", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("increment"));
  expect(screen.getByTestId("counter")).toHaveTextContent(2);
});

// Check state value when user press decrement button
it("decrements", () => {
  render(<Counter />);
  fireEvent.click(screen.getByTestId("decrement"));
  expect(screen.getByTestId("counter")).toHaveTextContent(1);
});
