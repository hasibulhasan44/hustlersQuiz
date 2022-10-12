import React, { useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { Bars3Icon , XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open , setopen] = useState(false)
    return (
        <div className='items-center text-xl bg-indigo-700 text-white p-8 p-lg-5 lg:flex lg:justify-around md:flex md:justify-around flex justify-between'>
            <div>
                <h1 className='text-2xl font-bold'>Hustler's Quiz</h1>
            </div>
            <div className='relative'>
                <div className={`lg:flex lg:flex-row lg:static md:flex md:flex-col flex flex-col absolute duration-500 ease-in  ${open ? 'top-[-45px]' : 'top-[-150px]'}`}>
                    <NavLink id='home' className={({isActive}) => isActive ? 'active' : undefined} to='home'>Home</NavLink>
                    <NavLink id='statistics' className={({isActive}) => isActive ? 'active' : undefined} to = 'statistics'>Statistics</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'active' : undefined} to = 'blogs'>Blogs</NavLink>
                </div>
            </div>
                {
                    open ? <XMarkIcon onClick={() => setopen(!open)} className='h-6 w-6 lg:hidden'/> : <Bars3Icon onClick={() => setopen(!open)} className='h-6 w-6 lg:hidden'/>
                }
        </div>
    );
};

export default Navbar;