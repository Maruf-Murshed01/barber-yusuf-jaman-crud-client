import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const BeardStyle = () => {
    const [beards, setBeards] = useState([])
    useEffect(() => {
        fetch('https://barber-crud-server-6too1j4sh-maruf-murshed01.vercel.app/beards')
            .then(res => res.json())
            .then(data => setBeards(data))
    }, [])

    return (
        <div className='m-12'>
            <h2 className='text-black text-3xl text-center font-semibold my-16'>Popular Beard Styles Which You May Love</h2>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    beards.map((brd) =>
                        <PhotoProvider key={brd._id}>
                            <PhotoView src={brd.img}>
                                <img src={brd.img} alt="" className="w-full h-full object-cover rounded" />
                            </PhotoView>
                        </PhotoProvider>
                    )

                }
            </div>
        </div>
    );
};

export default BeardStyle;