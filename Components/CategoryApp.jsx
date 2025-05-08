import React, { useEffect, useState } from 'react';
import AppCard from './AppCard';

const CategoryApp = () => {
    const [allApp, setAllApp] = useState([]);
    const [SocialApp , setSocialApp] = useState([]);
    const [productiveApp, setProductiveAp] = useState([]);
    const [game, setGame] = useState([]);
    useEffect( ()=>{
        fetch('apps.json').then(promis => promis.json()).then(result => setAllApp(result));
      setSocialApp(allApp.filter(app => app.category=='Social'))
      setGame(allApp.filter(app=> app.category=='Games'));
      setProductiveAp( allApp.filter(app=> app.category=='Productivity') );
    },[allApp] )
    return (
        <div>
            <div className=' mb-12'>
            <h1 className='text-3xl text-center md:text-start lg:text-4xl xl:text-5xl font-bold'>Social</h1>
            <div className='grid mt-12 grid-cols-1 gap-5 md:grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-4'>
                {
                    SocialApp.map(Apps=> <AppCard Apps={Apps}></AppCard>)
                }
            </div>
            </div>

            <div className=' mb-12'>
            <h1 className='text-3xl text-center md:text-start lg:text-4xl xl:text-5xl font-bold'>Productivity</h1>
            <div className='grid mt-12 grid-cols-1 gap-5 md:grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-4'>
                {
                    productiveApp.map(Apps=> <AppCard Apps={Apps}></AppCard>)
                }
            </div>
            </div>


            <div className=' mb-12'>
            <h1 className='text-3xl text-center md:text-start lg:text-4xl xl:text-5xl font-bold'>Games</h1>
            <div className='grid mt-12 grid-cols-1 gap-5 md:grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-4'>
                {
                    game.map(Apps=> <AppCard Apps={Apps}></AppCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default CategoryApp;