import React, { useEffect, useState } from 'react';
import ScheduleOne from './ScheduleOne';

const Schedule = () => {
    const [times, setTimes] = useState([])

    useEffect( () => {
        fetch('https://barber-crud-server-6too1j4sh-maruf-murshed01.vercel.app/times')
        .then(res => res.json())
        .then(data => setTimes(data))
    }, [])

    return (
        <div className=''>
            <h2 className='text-black text-3xl text-center font-semibold my-12'>My work schedule, Come here with your flexible way </h2>
            <div className='flex flex-wrap justify-center items-center'>
                {
                    times.map(ti => <ScheduleOne
                        ti={ti}
                        key={ti._id}
                    ></ScheduleOne>)
                }  
            </div>
        </div>
    );
};

export default Schedule;