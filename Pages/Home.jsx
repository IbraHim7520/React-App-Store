import React from 'react';
import Carosel from '../Components/Carosel';


const Home = () => {

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

            <section>
                
            </section>
        </div>
    );
};

export default Home;