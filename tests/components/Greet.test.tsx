import { render, screen } from "@testing-library/react";
// import { describe, it, expect } from "vitest";
import Greet from "../../src/components/Greet";
// import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it("should Render hello with the name when name is provided", () => {
    render(<Greet name="harry" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should Render login button when name is not provided", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
