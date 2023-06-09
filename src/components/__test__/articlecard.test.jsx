/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleCard from "../ArticleCard";

// make sure the articlecard could rendered with the use of props defined in the jsdoc

describe("ArticleCard", () => {
  const slug = "test-slug";
  const frontmatter = {
    title: "test title",
    date: "2021-09-28",
    excerpt:
      "morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus",
    tags: ["test", "tags"],
  };

  const INDONESIANDATE = new Date(frontmatter.date).toLocaleDateString(
    "id-ID",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  it("should render articlecard component", () => {
    render(<ArticleCard slug={slug} frontmatter={frontmatter} />);
  });

  // expect the title to be rendered
  it("should render title", () => {
    render(<ArticleCard slug={slug} frontmatter={frontmatter} />);
    expect(screen.getByText(frontmatter.title)).toBeInTheDocument();
  });

  // expect the date to be rendered on the time element with id articledate
  it("should render date", () => {
    render(<ArticleCard slug={slug} frontmatter={frontmatter} />);
    expect(screen.getByText(INDONESIANDATE)).toBeInTheDocument();
  });

  // it should be clickable
  it("should be clickable", () => {
    render(<ArticleCard slug={slug} frontmatter={frontmatter} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", `${slug}`);
  });
});
