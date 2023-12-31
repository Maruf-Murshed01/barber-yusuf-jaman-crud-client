import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const Login = () => {
    const navigate = useNavigate()
    const { logIn, googleSignIn } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        logIn(email, password)
            .then(result => {
                const user = result.user
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    const hangleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src="https://i.ibb.co/RzZ8d4v/6310507.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>

                    {/* social login */}
                    <div>
                        <p className='text-center'>
                            <button onClick={hangleGoogleSignIn} className='btn btn-outline btn-primary btn-wide'>Google</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;