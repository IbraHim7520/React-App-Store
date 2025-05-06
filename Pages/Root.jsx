import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer'

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;