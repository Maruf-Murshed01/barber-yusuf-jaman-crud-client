import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [allServices, setAllServices] = useState([])

    useEffect(() => {
        fetch('https://barber-crud-server-6too1j4sh-maruf-murshed01.vercel.app/homeservices')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])
    return (
        <div className='my-12 ml-16'>
            <h2 className='text-black text-3xl text-center font-semibold mt-24 mb-8'>Services, Which I provide</h2>
            <div className='grid grid-cols-3 gap-4 '>
                {
                    allServices.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className="flex justify-end mr-12 mt-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Link to='/allservices'>See all...</Link>
                </button>
            </div>
        </div>
    );
};

export default Services;