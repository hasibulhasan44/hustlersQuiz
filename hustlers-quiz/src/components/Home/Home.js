import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachSubject from '../eachSubject/EachSubject'

const Home = () => {
    const subjectsData = useLoaderData();
    const subjects = subjectsData.data;
    console.log(subjects);
    return (
        <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-1 m-8'>
            {
                subjects.map(subject => <EachSubject 
                    key={subject.id}
                    EachSubject= {subject}
                    ></EachSubject>)
            }
        </div>
    );
};

export default Home;