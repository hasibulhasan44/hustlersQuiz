import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuestion from "../SingleQuestion/SingleQuestion";
import './QuizDetails.css'

const QuizDetails = () => {
  const quiz = useLoaderData();
  const quizquestions = quiz.data.questions;
  console.log(quiz.data.name);
  return (
    <div>
        <h1 className="text-2xl text-center mt-4 text-slate-500">Practice {quiz.data.name} Quizes!</h1>
      {quizquestions.map((questions) => (
        <SingleQuestion key={questions.id} question={questions}></SingleQuestion>
      ))}
    </div>
  );
};

export default QuizDetails;
