import React from 'react';
import img from '../../images/brand.jpg'

const Header = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 mt-8 bg-gray-500 rounded-lg p-8 items-center'>
            <div>
                <img className='w-1/2 mx-auto rounded-lg' src={img} alt="" />
            </div>
            <div className='mr-8 text-white text-xl'>
                <p>Dear Hustlers, This is a free platform to practice your <span className='text-red-400'>React</span>, <span className='text-red-400'>Javascript</span>, <span className='text-red-400'>CSS</span> and <span className='text-red-400'>Git</span> skills with some quizes. Here you can check your skill level about the 4 fundamental concepts mentioned before. So, be passionate about coding and test your skill level at <span>Hustler's Quiz</span>. <br/> Thank You!</p>
            </div>
        </div>
    );
};

export default Header;