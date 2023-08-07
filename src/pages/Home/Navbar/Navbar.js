import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const allnav =
        <>
            <li><Link to='/' className='font-semibold'>Home</Link></li>
            {
                user?.uid ?
                    <>
                        <li><Link to='/myreview' className='font-semibold'>my reviews</Link></li>
                        <li><Link to='' className='font-semibold'>add service</Link></li>
                        <li><Link onClick={handleLogOut} className='font-semibold'>log out</Link></li>
                    </>
                    :
                    ""
            }

        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {allnav}
                    </ul>
                </div>
                <h2 className="btn btn-ghost normal-case text-xl">Barber Yusuf Jaman</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {allnav}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                            <p className='font-semibold ml-5'>{user?.displayName}</p>
                            {/* <p className='font-semibold ml-5 hidden sm:contents'>{user?.email}</p> */}
                            {/* <button onClick={handleLogOut} className='font-semibold ml-5'> Log Out </button> */}
                        </> :

                        <>
                            <button><Link to='/signup' className='font-semibold ml-5'>SignUp</Link></button>
                            <button><Link to='/login' className='font-semibold ml-5'>Log In</Link></button>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;