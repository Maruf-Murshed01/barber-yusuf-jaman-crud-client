import React, { useContext } from 'react';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const SignUp = () => {
    const navigate = useNavigate()
    const {signIn, createUserProfile} = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photourl = form.photourl.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photourl, email, password)

        signIn(email, password)
        .then(result => {
            const user = result.user
            updateSingleProfile(name, photourl)
            console.log(user);
            form.reset();
            // <Navigate to="/home" replace={true} />
        })
        .catch(err => console.error(err))

        const updateSingleProfile = (name, photourl) => {
            const profile = {
                displayName: name,
                photoURL: photourl
            }
            createUserProfile(profile)
            .then(() => {
                navigate('/')
            })
            .catch(err => console.error(err))
        }
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src="https://i.ibb.co/QNrGhV4/6300959.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photourl' placeholder="Your Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;