import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const AllServices = () => {
    const [sureAllServices, setSureAllServices] = useState([])

    useEffect(() => {
        fetch('https://barber-crud-server-6too1j4sh-maruf-murshed01.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setSureAllServices(data))
    }, [])
    return (
        <div>
            <div className='ml-16 mb-16'>
                <h2 className='text-black text-3xl text-center font-semibold my-12'>All Services</h2>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                    {
                        sureAllServices.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;