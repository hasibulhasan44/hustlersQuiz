import React from 'react';

const Options = ({option}) => {
    console.log(option);
    return (
        <div>
            <label>
                <button className='border-4 border-gray-400 p-2 rounded-xl hover:bg-indigo-400'>{option}</button>
            </label>
        </div>
    );
};

export default Options;