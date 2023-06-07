import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const search = req.query.search;

            if (search === undefined) {
                res.status(400).json({ message: "Bad request: search parameter is missing" });
                return;
            }

            const type = req.query.type;

            if (!(type == "quiz" || type == "blog" || type == "all" || type == "" || type === undefined)) {
                res.status(400).json({ message: "Bad request: type parameter is invalid. Available: quiz, blog" });
                return;
            }

            var search_data = [];

            if (type == "quiz" || type == "all" || type == "" || type === undefined) {
                const quizDir = path.join(process.cwd(), 'quizzes');
                const files = fs.readdirSync(quizDir);
                files.map((fileName) => {
                    const slug = "/quiz/" + fileName.replace(".json", "");
                    const readFile = fs.readFileSync(`quizzes/${fileName}`, "utf-8");
                    const json = JSON.parse(readFile);
                    const metadata = json.metadata;
                    if (metadata.title.toLowerCase().includes(search.toLowerCase())) {
                        const title = metadata.title;
                        const description = metadata.description;

                        const data = {
                            slug: slug,
                            title: title,
                            description: description,
                            type: "quiz"
                        }
                        search_data.push(data);
                    } else {
                        if (metadata.description.toLowerCase().includes(search.toLowerCase())) {
                            const title = metadata.title;
                            const description = metadata.description;

                            const data = {
                                slug: slug,
                                title: title,
                                description: description,
                                type: "quiz"
                            }
                            search_data.push(data);
                        }
                    }
                });
            }


            if (type == "blog" || type == "all" || type == "" || type === undefined) {
                const postsDir = path.join(process.cwd(), 'posts');
                const posts = fs.readdirSync(postsDir);
                posts.map((fileName) => {
                    const slug = "/blog/" + fileName.replace(".md", "");
                    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
                    const { data: frontmatter } = matter(readFile);

                    if (frontmatter.title.toLowerCase().includes(search.toLowerCase())) {
                        const title = frontmatter.title;
                        const excerpt = frontmatter.excerpt;

                        const data = {
                            slug: slug,
                            title: title,
                            description: excerpt,
                            type: "blog"
                        }
                        search_data.push(data);
                    } else {
                        if (frontmatter.excerpt.toLowerCase().includes(search.toLowerCase())) {
                            const title = frontmatter.title;
                            const excerpt = frontmatter.excerpt;

                            const data = {
                                slug: slug,
                                title: title,
                                description: excerpt,
                                type: "blog"
                            }
                            search_data.push(data);
                        }
                    }
                });
            }

            // Send a success response
            res.status(200).json({
                message: "Data retrieved successfully!",
                results: search_data
            });
        } catch (error) {
            res.status(500).json({ message: "An error occurred: " + error.message });
        }
    }
}
