import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Review = ({ rvs }) => {
    const { message, photoURL, displayName } = rvs;
    return (
        <>

        <div className='p-4'>
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex items-center space-x-10'>
                    <h2 className="card-title">{displayName}</h2>
                    <img className='w-10 h-10 rounded-full' src={photoURL} alt="" />
                </div>
                <p>{message}</p>
            </div>
        </div>

        </div>
        
        </>
    );
};

export default Review;