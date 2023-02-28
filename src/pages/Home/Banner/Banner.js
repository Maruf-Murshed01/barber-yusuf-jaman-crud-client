import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
// https://i.ibb.co/KrmVMy9/pico.jpg


// https://i.ibb.co/Zxc3mh2/barber.jpg
const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="hero" style={{ 
            height: '600px',
            backgroundImage: `url("https://i.ibb.co/HDMQ4kn/smiling-barber-standing-near-young-client-sitting-near-mirror.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1  className="mb-5 text-5xl font-bold text-white">Good to See You</h1>
                    <p className="mb-5 text-white ">I trim hair and beard in a flexible mode, whatever your desire. Come here and experience in a convenient way</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;