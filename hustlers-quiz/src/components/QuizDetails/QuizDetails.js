import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuestion from "../SingleQuestion/SingleQuestion";
import './QuizDetails.css'

const QuizDetails = () => {
  const quiz = useLoaderData();
  const quizquestions = quiz.data.questions;
  // console.log(quizquestions);
  return (
    <div>
      {quizquestions.map((questions) => (
        <SingleQuestion key={questions.id} question={questions}></SingleQuestion>
      ))}
    </div>
  );
};

export default QuizDetails;
