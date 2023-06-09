/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Infobox from "../Infobox";

describe("Infobox", () => {
  const title = "Test Title";
  const content = "Test Content";

  it("should render infobox component", () => {
    render(<Infobox title={title} content={content} />);
  });

  it("should render title", () => {
    render(<Infobox title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("should render content", () => {
    render(<Infobox content={content} />);
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  // it should accept custom classname
  it("should accept custom classname", () => {
    const customClassname = "custom-classname";
    render(<Infobox parentClassname={customClassname} />);
    expect(screen.getByTestId("infobox-parent")).toHaveClass(customClassname);
  }
  );
});
