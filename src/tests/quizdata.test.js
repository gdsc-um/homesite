import fs from "fs";

// regex for file name
// format: yyyy-mm-dd-title.md
const fileNameRegex = /^(\d{4}-\d{2}-\d{2})-[a-z0-9]+(?:-[a-z0-9]+)*\.json$/;

// regex for date
// format: yyyy-mm-dd
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

// regex for image url from google cdn
// format: https://drive.google.com/uc?id=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const imageUrlRegex = /^(https:\/\/drive\.google\.com\/uc\?id\=)+[-\w]{25,}/;

// regex for uuid
// format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
const uuidRegex =
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

describe("quizzes format is valid", () => {
  const files = fs.readdirSync("quizzes");
  files.map((fileName) => {
    const slug = fileName;
    const readFile = fs.readFileSync(`quizzes/${fileName}`, "utf-8");
    const json = JSON.parse(readFile);
    const metadata = json.metadata;

    it("should a JSON file", () => {
      if (!slug.includes(".json")) {
        throw new Error(
          `Quizzes directory should contains only JSON file. Error at ${slug}`,
        );
      }
    });

    // check the file name comply with regex
    it("should file name comply with regex", () => {
      if (!fileNameRegex.test(slug)) {
        throw new Error(
          `File name format should be yyyy-mm-dd-title.json. Error at ${slug}
          Please do NOT use underscore(_) or space( ) in the file name.`,
        );
      }
    });

    it("should contains title no more than 50 character", () => {
      const title = metadata.title;
      if (title === undefined || title === null || title === "") {
        throw new Error(`Title is undefined in ${slug}`);
      }

      if (title.length > 50) {
        throw new Error(`Title is more than 50 character in ${slug}`);
      }
    });

    // it should contains description no more than 150 character
    it("should contains description no more than 150 character", () => {
      const description = metadata.description;
      if (
        description === undefined ||
        description === null ||
        description === ""
      ) {
        throw new Error(`Description is undefined in ${slug}`);
      }

      if (description.length > 150) {
        throw new Error(`Description is more than 150 character in ${slug}`);
      }
    });

    // it should contains thumbnail
    it("should contains thumbnail", () => {
      const thumbnail = metadata.thumbnail;
      if (thumbnail === undefined || thumbnail === null || thumbnail === "") {
        throw new Error(`Thumbnail is undefined in ${slug}`);
      }

      if (!imageUrlRegex.test(thumbnail)) {
        throw new Error(`Thumbnail is not a valid image url in ${slug}`);
      }
    });

    // it should contains author
    it("should contains author", () => {
      const author = metadata.author;
      if (author === undefined || author === null || author === "") {
        throw new Error(`Author is undefined in ${slug}`);
      }
    });

    // it should contains uuid
    it("should contains uuid", () => {
      const uuid = metadata.uuid;
      if (uuid === undefined || uuid === null || uuid === "") {
        throw new Error(`UUID is undefined on file ${slug}`);
      }

      // validate uuid format
      if (!uuidRegex.test(uuid)) {
        throw new Error(`UUID is not a valid format in ${slug}`);
      }
    });

    // it should contains date
    it("should contains date", () => {
      const date = metadata.date;
      if (date === undefined || date === null || date === "") {
        throw new Error(`Date is undefined in ${slug}`);
      }

      // validate date format
      if (!dateRegex.test(date)) {
        throw new Error(`Date is not a valid format in ${slug}`);
      }
    });

    // it should contains tags
    it("should contains tags", () => {
      const tags = metadata.tags;
      if (tags === undefined || tags === null || tags === "") {
        throw new Error(`Tags is undefined in ${slug}`);
      }
    });

    json.questions.map((question) => {
      const questionText = question.question;
      const questionUUID = question.uuid;

      // it should contains uuid
      it("should contains uuid for the question", () => {
        if (
          questionUUID === undefined ||
          questionUUID === null ||
          questionUUID === ""
        ) {
          throw new Error(
            `UUID is undefined single question in ${questionText}`,
          );
        }

        // validate uuid format
        if (!uuidRegex.test(questionUUID)) {
          throw new Error(`UUID is not a valid format in ${questionText}`);
        }
      });

      //   it should contains question
      it("should contains question", () => {
        if (
          questionText === undefined ||
          questionText === null ||
          questionText === ""
        ) {
          throw new Error(
            `Question text is undefined in question UUID ${questionUUID}`,
          );
        }
      });

      var countAnswer = 0;
      var isCorrect = false;

      question.options.map((options) => {
        // it should contains text for the option
        it("should contains text for the option", () => {
          const optionText = options.answer;
          if (
            optionText === undefined ||
            optionText === null ||
            optionText === ""
          ) {
            throw new Error(`Option text is undefined in ${questionUUID}`);
          }
        });
        countAnswer += 1;

        // it should only contains 1 correct answer
        it("should only contains 1 correct answer", () => {
          const isCorrectAnswer = options.isCorrect;
          //   make sure every question have iscorrent value
          if (
            isCorrectAnswer === undefined ||
            isCorrectAnswer === null ||
            isCorrectAnswer === ""
          ) {
            throw new Error(`isCorrect is undefined in ${questionText}`);
          }

          if (isCorrectAnswer) {
            if (!isCorrect) {
              isCorrect = true;
            } else {
              throw new Error(
                `Question should have only 1 correct answer in ${questionText}`,
              );
            }
          }
        });
      });

      //   it should contains 4 options
      it("every question should contains 4 options", () => {
        if (countAnswer != 4) {
          throw new Error(`Question should have 4 options in ${questionText}`);
        }
      });

      //   it should contains 1 correct answer
      it("every question should contains 1 correct answer", () => {
        if (!isCorrect) {
          throw new Error(
            `Question should have minimum 1 correct answer in ${questionText}`,
          );
        }
      });
    });
  });
});
