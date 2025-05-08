import React from 'react';
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpeg"
import banner3 from "../assets/banner3.jpg"

const Banner = () => {
    return (
        <div>
            <div className='w-full h-fit  justify-items-center grid grid-cols-1 md:flex justify-center gap-12 items-center'>
            <div className='md:w-2/4 text-center md:text-start'>
                <h1 className='xl:text-6xl lg:text-4xl text-2xl md:text-3xl   font-bold text-black'>Discover our newly launched games – fresh adventures, epic challenges, and endless entertainment await!</h1>
                <p className='lg:text-xl text-sm font-semibold text-gray-600 mt-3'>From productivity tools to entertainment, education, health, and beyond — explore thousands of curated applications with detailed reviews, high-quality visuals, and secure downloads, all designed to help you find the perfect app for every need and lifestyle.</p>
                <button className='btn btn-outline btn-info px-12  mt-5'>Explore Now</button>
                </div>

                <div className='md:w-2/4'>
                    <div className="carousel ">
                        <div id="item1" className="carousel-item w-full">
                            <img
                                src={banner1}
                                className="w-full object-contain" />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img
                                src={banner2}
                                className="w-full object-contain" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img
                                src={banner3}
                                className="w-full object-contain" />
                        </div>
                    </div>
                    <div className="flex w-full justify-center gap-2 py-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                    </div>
                </div>
               
               
            </div>
        </div>
    );
};

export default Banner;