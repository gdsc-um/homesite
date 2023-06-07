
import fs from "fs";

test('quizzes format is valid', () => {
    const files = fs.readdirSync("quizzes");
    const quizzes = files.map((fileName) => {
        const slug = fileName;
        const readFile = fs.readFileSync(`quizzes/${fileName}`, "utf-8");
        const json = JSON.parse(readFile);
        const metadata = json.metadata;

        // check if slug not JSON file name
        if (!slug.includes(".json")) {
            throw new Error(`Quizzes directory should contains only JSON file. Error at ${slug}`);
        }

        // check if file name is not contains space
        if (slug.includes(" ")) {
            throw new Error(`File name should not contains space. Error at ${slug}`);
        }

        const title = metadata.title;
        if (title === undefined) {
            throw new Error(`Title is undefined in ${slug}`);
        }

        const description = metadata.description;
        if (description === undefined) {
            throw new Error(`Description is undefined in ${slug}`);
        }

        const thumbnail = metadata.thumbnail;
        if (thumbnail === undefined) {
            throw new Error(`Thumbnail is undefined in ${slug}`);
        }

        const author = metadata.author;
        if (author === undefined) {
            throw new Error(`Author is undefined in ${slug}`);
        }

        const uuid = metadata.uuid;
        if (uuid === undefined) {
            throw new Error(`UUID is undefined on file ${slug}`);
        }

        
        json.questions.map((question) => {
            const questionText = question.question;
            const uuid = question.uuid;

            if (uuid === undefined) {
                throw new Error(`UUID is undefined single question in ${slug}`);
            }

            if (questionText === undefined) {
                throw new Error(`Question text is undefined in ${slug}`);
            }

            var countAnswer = 0;
            var isCorrect = false;

            question.options.map((options) => {
                const optionText = options.answer;
                if (optionText === undefined) {
                    throw new Error(`Option text is undefined in ${slug}`);
                }
                countAnswer += 1;

                const isCorrectAnswer = options.isCorrect;
                if (isCorrectAnswer) {
                    if (!isCorrect) {
                        isCorrect = true;
                    } else {
                        throw new Error(`Question should have only 1 correct answer in ${slug}`);
                    }
                }
            });

            if (countAnswer != 4) {
                throw new Error(`Question should have 4 options in ${slug}`);
            }

            if (!isCorrect) {
                throw new Error(`Question should have minimum 1 correct answer in ${slug}`);
            }
        });
    });
});