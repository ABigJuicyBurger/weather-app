import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("Weather Component", () => {
  it("displays the weather interface", () => {
    render(<App />);

    // Test header elements
    expect(screen.getByText("WeathApp")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("search City")).toBeInTheDocument();
  });

  // Test weather display elements
  // Note: These might need to wait for data to load
  expect(screen.getByText(/Current Conditon/i)).toBeInTheDocument();
  expect(screen.getByText(/Feels Like/i)).toBeInTheDocument();
  expect(screen.getByText(/Wind/i)).toBeInTheDocument();
  expect(screen.getByText(/Humidity/i)).toBeInTheDocument();
});
