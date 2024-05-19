import { Link, NavLink } from "react-router-dom";
import './Css/header.css'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handelSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        {
            user && <>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/updateprofile'>UpdateProfile</NavLink>
            </>
        }
        <NavLink to='/contact'>Contact</NavLink>

    </>
    return (
     
       
        <div className="w-full shadow-sm relative z-10">
            <div className="navbar flex gap-10 justify-between lg:justify-center xl:justify-between lg:w-[80%] xl:mx-auto lg:mx-10">
                <div className="">
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
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-3 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className=" flex gap-4">
                    {
                        user ?
                            <>
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="m-1">
                                        <img alt="profile Photo" src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/XkRxRk6/user.png'} className="w-[50px] rounded-full border border-logoGreen" />

                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box md:w-52 -ml-24">
                                        <li><p className="rounded-md hover:bg-logoGreen px-3 py-2 hover:text-white text-base mb-3 md:mb-1 font-medium">{user?.displayName || 'No Name Found'}</p></li>
                                        <li><a onClick={handelSignOut} className="lg:hidden px-7 py-3 overflow-hidden group bg-logoGreen hover:bg-gradient-to-r hover:from-logoGreen hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                            <span className="relative">Log Out</span>
                                        </a></li>
                                    </ul>
                                </div>
                                <button onClick={handelSignOut} className="hidden lg:block rounded px-7 py-3 overflow-hidden group bg-logoGreen relative hover:bg-gradient-to-r hover:from-logoGreen hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                                    <span className="absolute right-0 w-8 h-32 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span className="relative">Log Out</span>
                                </button>

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
    )
};

export default Header;

