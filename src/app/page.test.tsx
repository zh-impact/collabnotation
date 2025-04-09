import { render, screen } from "@/test-utils";

import Page from "./page";

it("App Router: IndexPage", () => {
  render(<Page />);
  expect(screen.getByText("Upload File")).toBeInTheDocument();
  expect(screen.getByText("Create Blank Image")).toBeInTheDocument();
});
