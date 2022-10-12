import React from "react";
import Options from "../Options/Options";

const SingleQuestion = ({ question }) => {
  const options = question.options;
  console.log(options);
  return (
    <div className=" border-2 border-slate-700 w-1/2 mx-auto mb-8">
      <p className="bg-cyan-700">{question.question}</p>
      <div className="grid grid-cols-2 p-4 gap-4">
          {options.map((option) => 
            <Options option={option}></Options>
          )}
      </div>
    </div>
  );
};

export default SingleQuestion;
