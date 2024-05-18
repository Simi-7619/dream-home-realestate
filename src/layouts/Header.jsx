import { Link, NavLink } from "react-router-dom";
import './Css/header.css'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/updateprofile'>UpdateProfile</NavLink>
    </>
    return (
        <div className="w-full shadow-sm sticky">
            <div className="navbar xl:w-[1400px] xl:mx-auto lg:mx-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-3">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="font-semibold text-2xl">Dream <span className="text-logoGreen">Home</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-6 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex flex-wrap gap-4">
                    {
                        user ?
                            <>
                                <div className="pointer group relative flex w-max justify-center">
                                    <img alt="profile Photo" src={user?.photoURL} className="w-[50px] rounded-full border border-logoGreen" />
                                    {/* Hover Text */}
                                    <div className="absolute -left-[200px] top-0 flex cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-left-[150px] group-hover:opacity-100">
                                    <p className="rounded-md bg-logoGreen px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]">{user?.displayName || 'No Name Found'}</p>
                                        <span className="absolute -right-2 top-[50%] h-0 w-0 -translate-y-1/2 rotate-45 border-b-[20px] border-r-[20px] border-b-transparent border-r-logoGreen shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
                                    </div>
                                    {/* Hover button */}
                                </div>
                                <a onClick={logOut} className="relative rounded px-7 py-3 overflow-hidden group bg-logoGreen relative hover:bg-gradient-to-r hover:from-logoGreen hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">Log Out</span>
                                </a>

                            </>
                            :
                            <Link to='/login'>
                                <button className="relative rounded px-7 py-3 overflow-hidden group bg-logoGreen relative hover:bg-gradient-to-r hover:from-logoGreen hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">LogIn</span>
                                </button>
                            </Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;

