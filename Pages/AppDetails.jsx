
import { useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router';

const AppDetails = () => {
    const [Apps, SetApps] = useState([]);
    const [single, SingleApp] = useState({})
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        fetch("/apps.json").then(ser_res => ser_res.json()).then(apps => SetApps(apps))
        const Single_apps = Apps.find(app => app.id === id);
        SingleApp(Single_apps);
    }, [Apps, id])


    return (
        <div className='w-full'>
            <div className='containe md:p-12 shadow mx-auto w-full'>
                <img src={single?.banner} className='md:w-96 w-full mx-auto h-full'></img>
            </div>
            <div className='container flex items-center gap-3 p-5 w-full mx-auto'>
                <img src={single?.thumbnail} className='w-36 h-36 '></img>

                <div className='p-5'>
                    <h1 className='text-4xl font-extrabold'>{single?.name}</h1>
                    <p className='font-medium text-gray-700'>Developer ({single?.developer})</p>
                    <div className='flex mt-2 items-center gap-3'>
                        <div className='flex gap-1 items-center'> <FaDownload></FaDownload> {single?.downloads} </div>
                        <p className='bg-amber-200 px-2 rounded'>{single?.category}</p>
                        <div className='flex items-center gap-1'>  <FaStar></FaStar> <p> ({single?.rating})</p></div>
                    </div>
                    <button className='btn btn-primary px-12 mt-8'>Install</button>
                </div>
            </div>


            <div className='container w-full mx-auto p-5'>
                <h1 className='font-bold text-3xl'>Descriptions</h1>
                <p className='text-xl'>{single?.description}</p>
                <div className='flex items-center gap-2 mt-4'>
                    {
                        single?.features?.map(fet => <p className='bg-blue-300 w-fit px-4 p-1 rounded'>{fet}</p>)
                    }
                </div>


                <div className="flex mt-12 gap-4 w-full flex-col lg:flex-row">
                    <div className="card space-y-2 p-4 bg-base-300 rounded-box grid h-fit grow place-items-center">
                        {
                            single?.reviews?.map(rev=>  <div className='bg-white p-3 w-full rounded-md' ><p className=' text-xl font-semibold'>{rev.comment}</p>  <p>Rating: ({rev.rating})</p>   <p>User: {rev.user}</p>    </div> )
                        }
                    </div>

                    <div className="card bg-base-300 rounded-box grid h-fit grow p-4">
                        <h1 className='text-3xl font-bold'>Submit Your Review Here</h1>
                        <from className="fieldset">
                            <legend className="fieldset-legend">Review</legend>
                            <textarea className="textarea h-24" placeholder="Review"></textarea>
                            <button className='btn btn-primary w-fit px-12 ' type='Submit'>Submit</button>
                        </from>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AppDetails;