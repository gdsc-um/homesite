import fs from "fs";
import matter from "gray-matter";

test("blog markdown format is valid", () => {
  const files = fs.readdirSync("posts");

  files.map((fileName) => {
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    // check if slug not markdown file name
    if (!fileName.includes(".md")) {
      throw new Error(
        `Posts directory should contains only markdown file. Error at ${fileName}`,
      );
    }

    // check if file name is not contains space
    if (fileName.includes(" ")) {
      throw new Error(
        `File name should not contains space. Error at ${fileName}`,
      );
    }

    const title = frontmatter.title;
    if (title === undefined || title === null || title === "") {
      throw new Error(`Title is undefined in ${fileName}`);
    }

    // make sure the date is on the format yyyy-mm-dd
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(frontmatter.date)) {
      throw new Error(`Date format should be yyyy-mm-dd. Error at ${fileName}`);
    }

    const excerpt = frontmatter.excerpt;
    if (excerpt === undefined || excerpt === null || excerpt === "") {
      throw new Error(`Excerpt is undefined in ${fileName}`);
    }

    const tags = frontmatter.tags;
    if (tags === undefined || tags === null || tags === "") {
      throw new Error(`Tags is undefined in ${fileName}`);
    }

    const image = frontmatter.image;
    if (!(image === undefined || image === null || image === "")) {
      // check if format is jpg
      if (!image.includes(".jpg")) {
        throw new Error(
          `Hero image format should be jpg. Error at ${fileName}`,
        );
      }
    }
  });
});
