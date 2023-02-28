import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [change, setChange] = useState(null)
    const [myOwnReview, setMyOwnReview] = useState([])

    useEffect(() => {
        fetch(`https://barber-crud-server-6too1j4sh-maruf-murshed01.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOwnReview(data)
            })
    }, [user?.email])

    const handleUpdateReview = (_id) => {
        fetch(`https://barber-crud-server-6too1j4sh-maruf-murshed01.vercel.app/myreviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ change })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const handleDleteReview = _id => {
        fetch(`https://barber-crud-server-6too1j4sh-maruf-murshed01.vercel.app/myreviews/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                const remaining = myOwnReview.filter(mors => mors._id !== _id);
                setMyOwnReview(remaining)
                alert('deleted successfully')
            })
    }

    const handlesubmit = event => {
        event.preventDefault()
        const newcomment = event.target.updatingtext.value
        setChange(newcomment)
    }


    return (
        <div className='mt-5'>
            {
                myOwnReview.map(mor =>
                    <div key={mor._id} className="card w-full bg-base-100 shadow-xl m-5">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{mor?.servicename}</h2>
                            <p>{mor.message}</p>
                            <div className="card-actions justify-end">

                                {/* updating data using modal */}
                                <label htmlFor="modalForUpdate" className="btn btn-ghost">edit</label>

                                <input type="checkbox" id="modalForUpdate" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">{mor?.servicename}</h3>
                                        <form onSubmit={handlesubmit}>
                                            <input type="text" name='updatingtext' defaultValue={mor?.message} />
                                            <input className='btn btn-primary' type="submit" value="ok" />
                                        </form>
                                        <div className="modal-action">
                                        <label htmlFor="modalForUpdate" className="btn btn-ghost">cancel</label>
                                            <label onClick={() => handleUpdateReview(mor._id)} htmlFor="modalForUpdate" className="btn btn-ghost" >update</label>
                                        </div>
                                    </div>
                                </div>
                                {/* ending of updating data using modal */}

                                <button onClick={() => handleDleteReview(mor._id)} className="btn btn-ghost">delete</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default MyReview;