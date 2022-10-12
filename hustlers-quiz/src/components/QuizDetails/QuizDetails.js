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
      {quizquestions.map((question) => (
        <SingleQuestion key={question.id} question={question}></SingleQuestion>
      ))}
    </div>
  );
};

export default QuizDetails;
