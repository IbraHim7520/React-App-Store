import React, { useEffect, useState } from 'react';
import AppCard from '../Components/AppCard';

const AllApp = () => {
    const [Apps , setApps] = useState([]);
    const [appsCats, setAppsCat]= useState([]);
    useEffect(()=>{
        fetch('apps.json').then(res=>res.json()).then(data=> setApps(data))
        fetch('category.json').then(res=>res.json()).then(cats=> setAppsCat(cats.categories))
    },[])
    const handleCategoryClick = (category) =>{
        const categoryApps = Apps.filter(apps=> apps.category===category)
        setApps(categoryApps)
    }
    return (
        <div className=''>
           <div className='flex mt-5 grow-0 w-full justify-center gap-3 items-center'>
                <button className='btn  btn-outline  btn-primary'>All</button>
                {
                appsCats.map(app=> <button onClick={()=> handleCategoryClick(app)} className='btn btn-outline btn-primary'>{app}</button>)
                }
           </div>

           <div className='grid mb-12 mt-12 grid-cols-1 gap-5 md:grid-cols-2 justify-items-center lg:grid-cols-3 xl:grid-cols-4'>
                {
                    Apps.map(Apps=> <AppCard Apps={Apps}></AppCard>)
                }
            </div>
        </div>
    );
};

export default AllApp;