import React from 'react';
import { FaArrowAltCircleRight, FaDownload, FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';

const AppCard = ({singleApp}) => {
  const {name , thumbnail, downloads , rating} = singleApp;
    return (
        <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={thumbnail}
            alt="Movie" className='h-36 w-36' />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{name}</h2>
          <div className='flex justify-center items-center'>
          <FaStar className='text-amber-500' ></FaStar>
          <FaStar className='text-amber-500'></FaStar>
          <FaStar className='text-amber-500'></FaStar>
          <FaStar className='text-amber-500'></FaStar>
          <p>({rating})</p>
          </div>
        
          <div className="card-actions flex items-center justify-between">
            <h1 className='font-semibold text-sm'>{downloads} <FaDownload></FaDownload> </h1>
            <NavLink className="btn btn-primary">Details <FaArrowAltCircleRight></FaArrowAltCircleRight></NavLink>
          </div>
        </div>
      </div>
    );
};

export default AppCard;