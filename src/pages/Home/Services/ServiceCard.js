import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, name, price, description, img } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.split("").slice(0, 100).join("")}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={`/services/${_id}`}>
                            View Details
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;