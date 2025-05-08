import React, { useEffect, useState } from 'react';
import AppCard from './AppCard';


const TrendingApp = ({AppData}) => {
    const [apps , setApps] = useState([]);
    const [click, setClick] = useState(false);
    const handleSeeMore = ()=>{
            if (click){
                setClick(false)
            }else{
                setClick(true)
            }
    }
    useEffect( ()=>{
        const trendingApp = AppData.filter(app=> app.rating>4.5);
        const sortedApps = trendingApp.sort( (a,b) => b.rating - a.rating )
        const slicedApp = sortedApps.slice(0,8);
        setApps(slicedApp)
        if (click){
            setApps(trendingApp)
        }else{
            setApps(slicedApp)
        }
    }, [AppData, click] )
    return (
        <div className='mt-12 md:mt-16 '>
            <h1 className='text-3xl text-center md:text-start lg:text-4xl xl:text-5xl font-bold'>Treanding Now</h1>
        
            <div className='grid mt-12 grid-cols-1 gap-5 md:grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-4'>
                {
                    apps.map(Apps=> <AppCard Apps={Apps}></AppCard>)
                }
            </div>
        <div className='w-full mt-8 flex justify-center'><button onClick={handleSeeMore} className='btn btn-primary btn-outline'>{click? 'View less' : 'View More'}</button></div>
        </div>
    );
};

export default TrendingApp;