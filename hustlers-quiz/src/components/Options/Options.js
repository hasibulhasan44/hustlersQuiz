import React from 'react';

const Options = ({option , handlerForCompare}) => {
    return (
        <div>
            <label>
                <button onClick={(clickedOption) => handlerForCompare(option)} className='border-4 border-gray-400 p-2 rounded-xl hover:bg-indigo-400'>{option}</button>
            </label>
            
        </div>
    );
};

export default Options;