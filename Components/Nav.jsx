import React, { use, useState } from 'react';
import { IoLogIn } from 'react-icons/io5';
import { NavLink } from 'react-router';
import logo from "../assets/logo.png"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const Nav = () => {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  })
  const handleLogout = () => {
    signOut(auth)
      .then(succ => {
        setUser(null)
      }).catch(err => {
        console.log("Something went erong");
      })
  }
  return (
    <div className=" navbar shadow-md">
      <div className='flex  mx-4 w-full md:mx-18 lg:mx-24'>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <NavLink className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'} to={"/"} >Apps</NavLink>
                  <NavLink className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'} to={"/faq"} >FAQ</NavLink>
            </ul>
          </div>
          <div className='flex gap-5 items-center'>
            <img src={logo} className='w-12'></img>
            <NavLink to={"/"} className='text-xl text-black md:text-2xl font-bold'>App<span className='text-blue-600'>Nest</span></NavLink>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-5 text-xl font-semibold menu-horizontal px-1">
            <NavLink className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'} to={"/"} >Apps</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'text-green-500' : 'text-black'} to={"/faq"} >FAQ</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <div className='flex gap-5 items-center justify-center'>
            {
             
              user && <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName} >
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </div>
            }
            { console.log(user)}
            {
              user ? <buton onClick={handleLogout} className='btn btn-primary'>Logout</buton> : <NavLink to={'/user-login'} className='btn btn-primary'>Login <IoLogIn size={25} /> </NavLink>
            }
          </div>
        </div>
      </div>

    </div>
  );
};

export default Nav;