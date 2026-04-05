import React from 'react';
import NavBar from '../Components/Shared/NavBar/NavBar';
import { Outlet } from "react-router";
import Homepage from '../Pages/Homepage/Homepage';

const MainLayout = () => {
    return (
        <div>
            <NavBar />
            
            <Outlet />
        </div>
    );
};

export default MainLayout;