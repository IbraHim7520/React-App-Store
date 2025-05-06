import React from 'react';
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import { Outlet } from 'react-router';
const Root = () => {
    return (
        <div className='w-full overflow-x-hidden'>
            <Nav></Nav>
            <div className='min-h-[calc(100vh-250px)]'>
            <Outlet>

            </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;