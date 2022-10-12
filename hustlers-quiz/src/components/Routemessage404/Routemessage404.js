import React from 'react';
import img from '../../images/404.png'
import Navbar from '../Navbar/Navbar';

const Routemessage404 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img className='mx-auto mt-8' src={img} alt="" />
        </div>
    );
};

export default Routemessage404;