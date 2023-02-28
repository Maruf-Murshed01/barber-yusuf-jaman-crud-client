import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Review from './Review';

const DetailsService = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { _id, name, price, description, img } = service
    const [allReviews, setAllReviews] = useState([])

    //show all the reviews
    useEffect(() => {
        fetch(`https://barber-crud-server-6too1j4sh-maruf-murshed01.vercel.app/reviews?serviceid=${_id}`)
            .then(response => response.json())
            .then(data => {
                setAllReviews(data)
            })
    }, [])

    const handlePlaceReview = event => {
        event.preventDefault()
        const form = event.target
        const message = form.message.value

        const email = user?.email || 'unregistered';
        const photoURL = user?.photoURL || 'unregistered';
        const displayName = user?.displayName || 'unregistered';

        const review = {
            serviceid: _id,
            servicename: name,
            message,
            displayName,
            email,
            photoURL
        }

        //create a new review
        fetch('https://barber-crud-server-6too1j4sh-maruf-murshed01.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review placed successfully')
                    form.reset()
                    setAllReviews([...allReviews, review]);
                }
            })
            .catch(err => console.log(err))

    }
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <h2 className='text-black text-3xl text-center font-semibold my-12'>Service Details</h2>
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>price: ${price}</p>
                </div>
            </div>



            <div>
                <h2 className='text-black text-3xl text-center font-semibold my-12'>Service Review</h2>

                <div className=''>
                    {
                        allReviews.length < 1 ?
                            <p className='text-black text-center font-semibold'>no review yet</p>
                            :
                            allReviews.map((rvs, i) => <Review rvs={rvs} key={i}></Review>)
                    }
                </div>


                <div className='p-5'>
                    <h2 className='text-black text-3xl text-center font-semibold my-12'>I expect a review from you</h2>
                    {!user?.uid ?
                        <>
                            <p>'**please login first to add a review'</p>
                            <button className='btn'><Link to='/login' className='font-semibold ml-5'>Log In</Link></button>
                        </>
                        :
                        <>
                            <h2 className='text-black font-semibold'>leave a honest review for this service</h2>
                            <form onSubmit={handlePlaceReview}>
                                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                                <input className='btn' type="submit" value="Place Your Review" />
                            </form>
                        </>
                    }
                </div>
            </div>


            <div>

            </div>
        </>
    );
};

export default DetailsService;