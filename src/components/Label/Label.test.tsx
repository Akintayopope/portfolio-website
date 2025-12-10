import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

test("Label renders correctly", () => {
  render(<Label>Hello</Label>);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

test("Label disabled state applies styles", () => {
  render(<Label disabled>Disabled</Label>);
  const label = screen.getByText("Disabled");
  expect(label).toHaveStyle("opacity: 0.6");
});
