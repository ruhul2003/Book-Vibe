import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    const links = <>

        <li>
            <NavLink
                className={({ isActive }) => `mx-2 font-semibold ${isActive ? "text-green-600 px-3 py-2 border-1 border-green-600" : ""}`}
                to="/" >Home</NavLink>
        </li>

        <li>
            <NavLink
                className={({ isActive }) => `mx-2 font-semibold ${isActive ? "text-green-600 px-3 py-2 border-1 border-green-600" : ""}`}
                to="/Books" >Listed Books</NavLink>
        </li>

        <li>
            <NavLink
                className={({ isActive }) => `mx-2 font-semibold ${isActive ? "text-green-600 px-3 py-2 border-1 border-green-600" : ""}`}
                to="/page-to-read" >Pages To Read</NavLink>
        </li>

    </>
    return (

        <div className="navbar w-9/12 mx-auto bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm  gap-4 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <h2 className=" font-bold text-3xl">Book Vibe</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="btn btn-success">Sign In</button>
                <button className="btn btn-primary">Sign Up</button>
            </div>
        </div>

    );
};

export default NavBar;