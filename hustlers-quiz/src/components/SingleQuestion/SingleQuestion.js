import React from "react";
import Options from "../Options/Options";
import {toast} from 'react-toastify'

const SingleQuestion = (props) => {
  // console.log(props.question);
  const {options , correctAnswer , question} = props.question;
  const removePTag = question.replace('<p>', '');
  const mainQuestion = removePTag.replace('</p>', '')

  const compareCorrectAnswer = (clickedOption) =>{
    console.log(clickedOption);
    if (clickedOption === correctAnswer) {
      alert('CORRECT')
    }
    else{
     alert('wrong')
    }
  }
  return (
    <div>
        <div className=" border-2 border-slate-700 lg:w-1/2 mx-auto mb-8 rounded-lg mt-4">
            <p className="bg-cyan-700 text-white text-center p-4 text-lg rounded-lg">{mainQuestion}</p>
            <div className="grid grid-cols-2 p-4 gap-4">
                {options.map((option , idx) => 
                  <Options 
                  key={idx}
                  option={option}
                  handlerForCompare = {compareCorrectAnswer}
                  ></Options>
                )}
            </div>
        </div>
    </div>
  );
};

export default SingleQuestion;
