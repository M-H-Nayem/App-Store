import React from 'react';
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <>
            
            <div className=' flex flex-col gap-5 justify-center items-center'>
            <h1 className='text-red-400 text-[32px] font-[600] mt-7'>Check the internet or Reload</h1>
            <img className='w-[30%] rounded-3xl' src="error.png" alt="" />
            <h1 className='text-red-400 text-[32px] font-[600]'>404 - Page Not Found</h1>
            <p>Oops! The Page You Are Looking For Doesn't Exist</p>
            </div>
    
        </>
    );
};

export default ErrorPage; 
