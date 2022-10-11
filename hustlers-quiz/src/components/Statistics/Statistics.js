import React, { useEffect, useState } from 'react';
import './Statistics.css'
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [stats, setstats] = useState(0)
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const statsloaded = data.data.data
            const statData = statsloaded.map(stat => {
                const total = stat.total
                const name = stat.name
                const singleStat = {
                    Name: name,
                    Total: total
                }
                return singleStat
            })
            setstats(statData)
        })
    },[])
    return (
        <div className='mt-8'>
            <div className='linechart-container'>
                <ResponsiveContainer width={"99%"} height={300}>
                    <LineChart width={500} height={300} data={stats}>
                        <Line dataKey="Total" fill="#8884d8" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;