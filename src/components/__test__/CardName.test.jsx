/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CardName from "../CardName";

describe("CardName", () => {
  const frontmatter = {
    name: "test name",
    role: "test role",
    picture: "test picture",
    profile_url: "https://gdsc.dev",
  };

  it("should render cardname component", () => {
    render(<CardName frontmatter={frontmatter} />);
  });

  // expect the name to be rendered
  it("should render name", () => {
    render(<CardName frontmatter={frontmatter} />);
    expect(screen.getByText(frontmatter.name)).toBeInTheDocument();
  });

  // expect the role to be rendered
  it("should render role", () => {
    render(<CardName frontmatter={frontmatter} />);
    expect(screen.getByText(frontmatter.role)).toBeInTheDocument();
  });

  // expect the picture to be rendered
  it("should render picture", () => {
    render(<CardName frontmatter={frontmatter} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  // it should be clickable
  it("should be clickable", () => {
    render(<CardName frontmatter={frontmatter} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `${frontmatter.profile_url}`,
    );
  });
});
