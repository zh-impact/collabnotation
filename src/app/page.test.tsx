import { screen } from "@testing-library/react";
import { render } from "@/test-utils";

import Page from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page />);
  expect(screen.getByText("Upload File")).toBeInTheDocument();
  expect(screen.getByText("Create Blank Image")).toBeInTheDocument();
});
