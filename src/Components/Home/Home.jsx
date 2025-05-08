import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AuthProvider, { AuthContext } from '../../AuthProvider';
import Banner from '../Banner';

const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>          
            <Footer></Footer>
        </div>
    );
};

export default Home;