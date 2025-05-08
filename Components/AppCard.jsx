import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';

const AppCard = ({Apps}) => {
    const {id,name , rating , downloads , thumbnail} = Apps;
    return (
        <NavLink to={`/app-details/${id}`} className='flex  items-center p-2 shadow w-72 h-36 bg-base-200'>
            <div className='w-2/4 flex items-center  h-full'>
                <img src={thumbnail} className='object-cover' ></img>
            </div>

            <div className='w-2/4 p-3 flex flex-col '>
            <div className=''>
            <h1 className='text-xl font-bold'>{name}</h1>
            <div className='flex gap-2 items-center'>
                <p>{downloads}</p>
               <FaDownload></FaDownload>
            </div>
            <div className='flex items-center'>
                <FaStar></FaStar>
                <p>{rating}</p>
            </div>
            </div>
         
            </div>
        </NavLink>
    );
};

export default AppCard;