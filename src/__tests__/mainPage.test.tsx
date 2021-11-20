import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Test main page", () => {
  it("should have an app header bar", () => {
    render(<App/>);
    expect(screen.getByText(/Lunch picker/i)).toBeInTheDocument();
  });
});