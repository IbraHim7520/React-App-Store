import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import TrendingApp from '../Components/TrendingApp';
import { NavLink, useLoaderData } from 'react-router';
import secImg from "../assets/section-img.png"
import CategoryApp from '../Components/CategoryApp';
const Home = () => {
    const AppData = useLoaderData();
    
    useEffect(()=>{
       
    },[])
    return (
        <div className='p-20'>
            <Banner></Banner>
            <TrendingApp AppData={AppData}></TrendingApp>

            <section className='bg-base-200 p-8 mt-12 shadow-md'>
                <div className='w-full grid grid-cols-1 justify-items-center  md:flex justify-center  items-center'>
                    <div className='md:w-2/4'>
                        <img src={secImg} ></img>
                    </div>
                    <div className='md:w-2/4 text-center mt-12 md:mt-0 md:text-start'>
                        <h1 className='xl:text-6xl lg:text-4xl text-2xl md:text-3xl   font-bold text-black'>
                            Discover smart, offline Android apps made to simplify your daily life — fast, secure, and easy to use!
                        </h1>
                        <p className='lg:text-xl text-sm font-semibold text-gray-600 mt-3'>From tracking your daily expenses to managing tasks with ease, our offline Android apps are thoughtfully crafted to deliver a smooth, secure, and reliable experience — anytime, anywhere.</p>
                        <NavLink to={"/all-apps"} className='btn btn-primary px-12 mt-5'>Discover All Apps Now</NavLink>
                    </div>
                </div>
            </section>



            <section className='p-8 mt-12'>
            
           <CategoryApp></CategoryApp>

            </section>
        </div>
    );
};
export default Home;