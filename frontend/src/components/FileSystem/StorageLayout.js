import React from 'react'
import { Outlet } from 'react-router-dom';
import NavNameChanger from '../utility/NavNameChanger';

function StorageLayout() {

    return (
        <div>
            <NavNameChanger navName='Drive'/>
            <Outlet />
        </div>
    )
}

export default StorageLayout;