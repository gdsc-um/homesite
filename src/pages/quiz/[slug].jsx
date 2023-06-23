import React from "react";
import Link from "next/link";
import { v4 } from "uuid";

// Server-only code.
const fs = require("fs");
export async function getStaticPaths() {
  const files = fs.readdirSync("quizzes");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".json", ""),
    },
  }));

  // return file path
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params: { slug } }) {
  // read the file questions from the quizzes folder
  const questions = fs.readFileSync(`quizzes/${slug}.json`, "utf8");

  // return the questions data as props
  return {
    props: {
      data: JSON.parse(questions),
    },
  };
}

const Quiz = (questions) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const [answers, setAnswers] = React.useState([]);
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);
  const [sessionUUID, setSessionUUID] = React.useState(0);

  // set start time for the first time
  React.useEffect(() => {
    if (startTime === 0) {
      setStartTime(new Date(Date.now()));
    }
    setSessionUUID(v4());
  }, []);

  const sendPOSTReport = async (report, url) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report),
    });
    const data = await response.json();
    console.log(data);
  };

  // function to handle every question
  const handleQuestion = (answer) => {
    var correct = false;
    // set the end time
    setEndTime(new Date(Date.now()));

    // check if the answer is correct
    if (answer.isCorrect) {
      setScore(score + 1);
      correct = true;
    } else {
      correct = false;
    }

    var currentDate = new Date(Date.now());
    answers.push({
      uuid: questions.data.questions[currentQuestion].uuid,
      question: questions.data.questions[currentQuestion].question,
      userAnswer: answer.answer,
      correctAnswer: questions.data.questions[currentQuestion].options.filter(
        (option) => option.isCorrect,
      )[0].answer,
      correct: correct,
      timestamp: `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`,
    });

    // check if the current question is the last question
    if (currentQuestion + 1 === questions.data.questions.length) {
      // generate report data
      const report = {
        attempt: sessionUUID,
        quiz: {
          uuid: questions.data.metadata.uuid,
          title: questions.data.metadata.title,
        },
        score: {
          correct: score,
          incorrect: questions.data.questions.length - score,
        },
        totalQuestions: questions.data.questions.length,
        startTime: `${startTime.toLocaleDateString()} ${startTime.toLocaleTimeString()}`,
        endTime: `${endTime.toLocaleDateString()} ${endTime.toLocaleTimeString()}`,
        duration: Math.floor((endTime - startTime) / 1000 / 60),
        data: answers,
      };

      // save the report
      sendPOSTReport(report, "/api/report");

      // if it is the last question, show the score
      setShowScore(true);
      return;
    }

    // set the next question
    const nextQues = currentQuestion + 1;
    nextQues < questions.data.questions.length && setCurrentQuestion(nextQues);
  };

  // return the quiz page
  return (
    <div className="w-full min-h-screen flex flex-col">
      {showScore ? (
        <div className="flex justify-center items-center w-full min-h-screen">
          <h1 className="text-3xl font-semibold text-center text-[#262626]">
            You scored {score} out of {questions.data.questions.length}
          </h1>
        </div>
      ) : (
        <>
          <div className="w-full h-[40vh] px-10 bg-white flex justify-center items-center relative flex-col">
            <div className="absolute top-5 left-5 px-5 py-3 bg-neutral-100 rounded shadow-md">
              <h3 className="text-[#262626] text-[10px] lg:text-[1vw] font-semibold">
                Question {currentQuestion + 1}
              </h3>
            </div>
            <Link href="/quiz">
              <div className="absolute top-5 right-5 px-5 py-3 bg-neutral-100 rounded shadow active:scale-90 duration-200 lg:hover:scale-105 lg:hover:shadow-md">
                <h3 className="text-[#262626] text-[10px] lg:text-[1vw] font-semibold">
                  Back to Quizzes
                </h3>
              </div>
            </Link>
            <h2 className="pt-[120px] text-center text-2xl lg:text-[1.6vw] text-[#262626] whitespace-pre-line mb-5">
              {questions.data.questions[currentQuestion].question}
            </h2>
            {/* image container */}
            <div className="">
              {questions.data.questions[currentQuestion].image && (
                // if there is an image in the question show
                <div className="max-w-[50vh] overflow-hidden rounded-lg">
                  <img
                    src={questions.data.questions[currentQuestion].image}
                    alt="question image"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="w-full py-20 flex justify-center items-center">
            <div className=" grid grid-cols-2 gap-8 gap-x-12 px-5">
              <button
                onClick={() =>
                  handleQuestion(
                    questions.data.questions[currentQuestion].options[0],
                  )
                }
                className="flex flex-col gap-5 items-center"
                style={{ alignSelf: "flex-end" }}
              >
                <div className="max-w-[30vh] overflow-hidden rounded-lg">
                  {questions.data.questions[currentQuestion].options[0]
                    .image ? (
                    <img
                      src={
                        questions.data.questions[currentQuestion].options[0]
                          .image
                      }
                      alt="answer-0 image"
                    />
                  ) : null}
                </div>
                <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-base lg:text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                  {questions.data.questions[currentQuestion].options[0].answer}
                </div>
              </button>
              <button
                onClick={() =>
                  handleQuestion(
                    questions.data.questions[currentQuestion].options[1],
                  )
                }
                className="flex flex-col items-center gap-5"
                style={{ alignSelf: "flex-end" }}
              >
                {questions.data.questions[currentQuestion].options[1].image ? (
                  <div className="max-w-[30vh] overflow-hidden rounded-lg">
                    <img
                      src={
                        questions.data.questions[currentQuestion].options[1]
                          .image
                      }
                      alt="answer-1 image"
                    />
                  </div>
                ) : null}
                <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-base lg:text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                  {questions.data.questions[currentQuestion].options[1].answer}
                </div>
              </button>
              <button
                onClick={() =>
                  handleQuestion(
                    questions.data.questions[currentQuestion].options[2],
                  )
                }
                className="flex flex-col items-center gap-5"
                style={{ alignSelf: "flex-end" }}
              >
                <div className="max-w-[30vh] overflow-hidden rounded-lg">
                  {questions.data.questions[currentQuestion].options[2]
                    .image ? (
                    <img
                      src={
                        questions.data.questions[currentQuestion].options[2]
                          .image
                      }
                      alt="answer_2 image"
                    />
                  ) : null}
                </div>
                <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-base lg:text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                  {questions.data.questions[currentQuestion].options[2].answer}
                </div>
              </button>
              <button
                onClick={() =>
                  handleQuestion(
                    questions.data.questions[currentQuestion].options[3],
                  )
                }
                className="flex flex-col items-center gap-5"
                style={{ alignSelf: "flex-end" }}
              >
                <div className="max-w-[30vh] overflow-hidden rounded-lg">
                  {questions.data.questions[currentQuestion].options[3]
                    .image ? (
                    <img
                      src={
                        questions.data.questions[currentQuestion].options[3]
                          .image
                      }
                      alt="answer_3 image"
                    />
                  ) : null}
                </div>
                <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-base lg:text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                  {questions.data.questions[currentQuestion].options[3].answer}
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
