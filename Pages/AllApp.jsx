import React, { useEffect, useState } from 'react';
import AppCard from '../Components/AppCard';
import { data } from 'react-router';

const AllApp = () => {
    const [allApps , setAllApps]= useState([]);
    const [Apps , setApps] = useState([]);
    const [appsCats, setAppsCat]= useState([]);
    const [click, setCLick] = useState(0);
    useEffect(()=>{
        fetch('apps.json').then(res=>res.json()).then(data=> {setAllApps(data); setApps(data)} )
        fetch('category.json').then(res=>res.json()).then(cats=> setAppsCat(cats.categories))
    },[])
    const handleCategoryClick = (index, e) =>{
         setCLick(index)
         const catName = e.target.innerText;
         if (catName==='All'){
            setApps(allApps)
            return
         }
       const hh =  allApps.filter( apps=> apps.category==catName);
       setApps(hh)
    }
    return (
        <div className=''>
           <div className='flex mt-5 grow-0 w-full justify-center gap-3 items-center'>
                {
                appsCats.map((app,index)=> <button key={index} onClick={(e)=> handleCategoryClick(index, e)} className={`btn ${click===index ? 'btn-primary' : 'btn-outline' }`} >{app}</button>)
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