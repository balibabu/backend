import React, { useContext } from 'react'
import jwt_decode from "jwt-decode"
import AuthContext from '../../AuthContext'
import Login from '../userAuth/Login';
import Logout from '../userAuth/Logout';
import Register from '../userAuth/Register';
import AppsList from '../Apps/AppsList';
import appsImage from '../../images/apps.png';
import homeImage from '../../images/home.png';

import { Link, Outlet } from 'react-router-dom';
import Clipboard from '../Clipboard/Clipboard';
import GlobalVarContext from '../../GlobalVariables';
import Alert from '../utility/Alert';
import LoadingUI from '../utility/LoadingUI';

var appsInNav;
function Navbar() {
    let { authTokens } = useContext(AuthContext);
    const { navName } = useContext(GlobalVarContext);

    if (authTokens) {
        var user = jwt_decode(authTokens.access).username.toUpperCase();
    }

    if (navName === 'Welcome' || navName === 'Apps') {
        appsInNav = <></>;
    } else {
        appsInNav = (
            <button data-bs-toggle="modal" data-bs-target="#applist" style={{ background: 'none', border: 'none' }}>
                <img src={appsImage} style={{ width: '2rem', height: '2rem', borderRadius: '20%' }} alt="Button Image" />
            </button>
        );
    }

    return (
        <>
            <nav className="navbar bg-primary navbar-expand-lg">
                <div className="container-fluid">
                    <h1 className="navbar-brand" >{navName}</h1>
                    <ul className="nav justify-content-end bg-primary px-0 mx-0">
                        {authTokens ?
                            <>

                                {appsInNav}
                                <Link to='/'><img src={homeImage} alt='home' style={{ width: '2rem', height: '2rem', borderRadius: '20%', marginLeft: '15px', marginTop: '4px' }} /></Link>
                                <button style={{ background: 'none', border: 'none' }}>
                                    <h3 className="text-white mx-3" href="#" data-bs-toggle="modal" data-bs-target="#logout">{user}</h3>
                                </button>

                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#" data-bs-toggle="modal" data-bs-target="#login-modal">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#" data-bs-toggle="modal" data-bs-target="#register-modal">Register</a>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
            <Alert />
            <Login />
            <Logout />
            <Register />
            <AppsList />
            <LoadingUI />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Navbar