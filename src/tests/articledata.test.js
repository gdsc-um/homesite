import fs from "fs";
import matter from "gray-matter";

// regex for file name
// format: yyyy-mm-dd-title.md
const fileNameRegex = /^(\d{4}-\d{2}-\d{2})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;

// regex for date
// format: yyyy-mm-dd
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// regex for image url from google cdn
// format: https://drive.google.com/uc?id=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const imageUrlRegex = /^(https:\/\/drive\.google\.com\/uc\?id\=)+[-\w]{25,}/;

// regex for detecting inline html tag
const inlineHtmlRegex = /<\w+.*?>.*?<\/\w+>/;

// regex to match image are properly formatted and have alt text
const imageRegex = /!\[.*?\]\(.*?\)/;

describe("blog markdown file", () => {
  const files = fs.readdirSync("posts");

  files.map((fileName) => {
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    // check if slug not markdown file name
    it("should markdown file", () => {
      if (!fileName.includes(".md")) {
        throw new Error(
          `Posts directory should contains only markdown file. Error at ${fileName}`,
        );
      }
    });

    // check the file name comply with regex
    it("should file name comply with regex", () => {
      if (!fileNameRegex.test(fileName)) {
        throw new Error(
          `File name format should be yyy-mm-dd-title.md. Error at ${fileName}
          Please do NOT use underscore(_) or space( ) in the file name.`,
        );
      }
    });

    // check if frontmatter contains title
    it("should contains title", () => {
      if (!frontmatter.title) {
        throw new Error(
          `Frontmatter should contains title. Error at ${fileName}`,
        );
      }
    });

    // check if frontmatter contains date
    it("should contains date", () => {
      if (!frontmatter.date) {
        throw new Error(
          `Frontmatter should contains date. Error at ${fileName}`,
        );
      }

      if (!dateRegex.test(frontmatter.date)) {
        throw new Error(
          `Date format should be yyyy-mm-dd. Error at ${fileName}`,
        );
      }
    });

    // check if frontmatter contains description
    it("should contains description no more than 160chr", () => {
      if (!frontmatter.excerpt) {
        throw new Error(
          `Frontmatter should contains description. Error at ${fileName}`,
        );
      }

      if (frontmatter.excerpt.length > 160) {
        throw new Error(
          `Description should be less than 160 characters. Error at ${fileName}`,
        );
      }
    });

    // check if frontmatter contains tags
    it("should contains tags atleast one, max five tags", () => {
      if (!frontmatter.tags) {
        throw new Error(
          `Frontmatter should contains tags. Error at ${fileName}`,
        );
      }

      if (frontmatter.tags.length === 0) {
        throw new Error(
          `Frontmatter should contains at least one tag. Error at ${fileName}`,
        );
      }

      if (frontmatter.tags.length > 5) {
        throw new Error(
          `Frontmatter should contains max 5 tags. Error at ${fileName}`,
        );
      }
    });

    // check if frontmatter contains cover_image
    it("should contains image", () => {
      if (!frontmatter.thumbnail) {
        throw new Error(
          `Frontmatter should contains cover_image. Error at ${fileName}`,
        );
      }

      if (!frontmatter.thumbnail.includes("https://")) {
        throw new Error(
          `Frontmatter should contains image url. Error at ${fileName}`,
        );
      }

      if (!imageUrlRegex.test(frontmatter.thumbnail)) {
        throw new Error(
          `Frontmatter should contains image url from google cdn. Error at ${fileName}`,
        );
      }
    });

    // check if content does not contains inline html tag
    it("should not contains inline html tag", () => {
      if (inlineHtmlRegex.test(readFile)) {
        throw new Error(
          `Content should not contains inline html tag. Error at ${fileName}`,
        );
      }
    });

    // check if content contains image
    it("should contains image", () => {
      if (!imageRegex.test(readFile)) {
        throw new Error(`Content should contains image. Error at ${fileName}`);
      }
    });
  });
});
