import React from 'react';
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpeg"
import banner3 from "../assets/banner3.jpg"
import { motion } from 'framer-motion';

const Carosel = () => {
  return ( 
    <div className='grid grid-cols-1  justify-items-center md:flex  w-full  justify-center items-center'>
        <div className='w-2/4 '>
        <motion.div
                initial={{ opacity: 0, y: 30 }}   
                animate={{ opacity: 1, y: 0 }}       
                transition={{ duration: 0.9, ease: "easeIn" }} 
                className="md:text-start text-center p-5 mt-3"
            >
            <h1 className='text-4xl md:text-5xl font-bold mt-4'>App<span className='text-blue-500'>Nest</span></h1>
            <p className='text-xl md:text-2xl font-semibold mt-2'>Find and Download the Best Free and Premium Apps All in One Place</p>
            <p className='mt-2 md:text-xl'>Browse thousands of trusted apps across categories, discover new favorites, and enjoy fast, secure downloads whenever you need them.</p>
            <button className='btn btn-outline btn-primary mt-5 px-12'>Get Start</button>
            </motion.div>
        </div>
      <div className='w-2/4'>
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={banner1}
      className="w-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={banner2}
      className="w-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={banner3}
      className="w-full object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      </div>

    </div>
  );
};

export default Carosel;