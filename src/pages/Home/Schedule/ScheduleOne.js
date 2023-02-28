import React from 'react';

const ScheduleOne = ({ ti }) => {
    const { id, day, time } = ti;
    let bgColorClass = "";

    if (day === "FRI" || day === "WED") {
        bgColorClass = "bg-[gray]";
    }
    else{
        bgColorClass = "bg-[#3FACB1]";
    }

    return (
        <div>
            <div className={`flex items-center justify-center flex-col w-24 h-24 rounded-full ${bgColorClass} m-5`}>
                <div className="text-white font-bold text-lg">{day}</div>
                <div className="text-white text-sm">{time}</div>
            </div>
        </div>
    );

};



export default ScheduleOne;