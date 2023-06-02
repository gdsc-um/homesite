import React from 'react'
import Link from 'next/link';

// Server-only code.
const fs = require('fs')
export async function getStaticPaths() {
    const files = fs.readdirSync('quizzes');
    const paths = files.map((fileName) => ({
        params: {
        slug: fileName.replace('.json', ''),
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
    const questions = fs.readFileSync(`quizzes/${slug}.json`, 'utf8');

    // return the questions data as props
    return {
        props: {
            data: JSON.parse(questions),
        }
    }
}

const Quiz = (questions) => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);

    // function to handle every question 
    const handleQuestion = (answer) => {
        // check if the answer is correct
        if (answer.isCorrect) {
            setScore(score + 1);
        }

        // check if the current question is the last question
        if (currentQuestion + 1 === questions.data.length) {
            // if it is the last question, show the score
            setShowScore(true);
            return;
        }

        // set the next question
        const nextQues = currentQuestion + 1;
        nextQues < questions.data.length && setCurrentQuestion(nextQues);
    };

    // return the quiz page
    return (
        <div className='w-full min-h-screen flex flex-col'>
            {
                showScore ? (
                    <div className='flex justify-center items-center w-full min-h-screen'>
                        <h1 className="text-3xl font-semibold text-center text-[#262626]">
                            You scored {score} out of {questions.data.length}
                        </h1>
                    </div>
                ) : (
                    <>
                        <div className='w-full h-[40vh] px-10 bg-white flex justify-center items-center relative'>
                            <div className='absolute top-5 left-5 px-5 py-3 bg-neutral-100 rounded shadow-md'>
                                <h3 className='text-[#262626] text-[1vw] font-semibold'>
                                    Question {currentQuestion + 1}
                                </h3>
                            </div>
                            <Link href='/quiz'>
                                <div className='absolute top-5 right-5 px-5 py-3 bg-neutral-100 rounded shadow active:scale-90 duration-200 lg:hover:scale-105 lg:hover:shadow-md'>
                                    <h3 className='text-[#262626] text-[1vw] font-semibold'>
                                        Back to Quizzes
                                    </h3>
                                </div>
                            </Link>
                            <h2 className='text-start text-[1.6vw] text-[#262626] whitespace-pre-line'>
                                {questions.data[currentQuestion].question}
                            </h2>
                        </div>
                        <div className='w-full h-[60vh] flex justify-center items-center'>
                            <div className=" grid grid-cols-2 gap-8 gap-x-12">
                                <button onClick={
                                    () => handleQuestion(questions.data[currentQuestion].options[0])
                                }>
                                    <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                                        {questions.data[currentQuestion].options[0].answer}
                                    </div>
                                </button>
                                <button onClick={
                                    () => handleQuestion(questions.data[currentQuestion].options[1])
                                }>
                                    <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                                        {questions.data[currentQuestion].options[1].answer}
                                    </div>
                                </button>
                                <button onClick={
                                    () => handleQuestion(questions.data[currentQuestion].options[2])
                                }>
                                    <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                                        {questions.data[currentQuestion].options[2].answer}
                                    </div>
                                </button>
                                <button onClick={
                                    () => handleQuestion(questions.data[currentQuestion].options[3])
                                }>
                                    <div className="w-[35vw] h-[15vh] rounded-md flex justify-center items-center text-[#262626] text-[1.7vw] font-semibold bg-white hover:cursor-pointer lg:hover:shadow-lg shadow lg:hover:scale-105 lg:hover:-translate-y-2 duration-200 active:scale-90">
                                        {questions.data[currentQuestion].options[3].answer}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </>)
            }
        </div>
    );
}; 

export default Quiz;