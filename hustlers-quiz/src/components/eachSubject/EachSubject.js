import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const EachSubject = ({EachSubject}) => {
    const {id, logo, name, total} = EachSubject;
    console.log(id);
return (
    <div>
        <div>
            <div className='border-2 rounded-xl ml-4 bg-indigo-700 mb-8'>
                <img className='bg-black rounded-xl' src={logo} alt=''></img>
                <p className='text-white p-2'>Name: {name}</p>
                <p className='text-white p-2'>Questions: {total}</p>
                <div className='text-center'>
                <Link className='border-2 border-double block mt-2 text-black text-xl mx-auto bg-indigo-300 flex items-center p-1 rounded-lg mb-4'>Jump to Quiz<ArrowRightIcon className='h-6 w-6 ml-2'></ArrowRightIcon></Link>
                </div>

            </div>
        </div>
    </div>
);
};

export default EachSubject;