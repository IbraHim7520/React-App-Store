import React, { Suspense, useEffect, useState } from 'react';
import Carosel from '../Components/Carosel';
import AppCard from '../Components/AppCard';
import { useLoaderData } from 'react-router';
import { MdArrowCircleRight } from 'react-icons/md';



const Home = () => {
    const [apps , setApps] = useState([]);
    const [clicked, setClicked] = useState(false);
    const AppData = useLoaderData();
    const handleSeeMore = () =>{
        if (clicked){
            setClicked(false)
        }else{
            setClicked(true)
        }
    }
    useEffect(()=>{
        const TrendingApps = AppData.filter(app=> app.rating>4.5)
        const slicedApps = TrendingApps.slice(0,8);
        if (clicked){
            setApps(TrendingApps)
        }else{
            setApps(slicedApps)
        }
       
    },[AppData, clicked])

   
    return (
        <div className='md:mx-18 lg:mx-24 py-5'>
            <div className='bg-base-100  shadow-md'>
                <div className=''>
                    <Carosel></Carosel>
                </div>
            </div>
            <div className='w-full mx-auto text-center mt-12'>
                <h1 className='text-3xl md:text-4xl font-bold'>Browse Out Latest Applications</h1>
                <p className='md:text-xl'>Stay updated with the most recent app releases across all categories and platforms.</p>
            </div>

            <section className='mt-12'>
                <div className='flex justify-between items-center'>
                <h1 className='text-center md:text-start md:text-4xl p-3 font-semibold'>Treanding Apps</h1>
                <button onClick={handleSeeMore} className='btn  btn-primary'>{clicked ? 'View Less' : "View More"}</button>
                </div>
                <div className='bg-base-100  shadow-md'>
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center items-center gap-5'>
         <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
            {
                apps.map(singleApp => <AppCard singleApp={singleApp}></AppCard>)
            }
            </Suspense>
                   </div>
                  
                </div>
            </section>


            <section className='mt-12'>
                <div className='flex justify-between items-center'>
                <h1 className='text-center md:text-start md:text-4xl p-3 font-semibold'>Our Others App</h1>
                <button onClick={handleSeeMore} className='btn  btn-primary'>{clicked ? 'View Less' : "View More"}</button>
                </div>
                <div className='bg-base-100  shadow-md'>
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-center items-center gap-5'>
         <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
            {
                apps.map(singleApp => <AppCard singleApp={singleApp}></AppCard>)
            }
            </Suspense>
                   </div>
                  
                </div>
            </section>
        </div>
    );
};

export default Home;