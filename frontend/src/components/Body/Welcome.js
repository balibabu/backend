import React, { useContext } from 'react'
import AuthContext from '../../AuthContext'
import { NavLink } from 'react-router-dom'
import cloudImg from '../../images/cloud.png'
import noteimg from '../../images/noteapp.png';
import calenderimg from '../../images/calenderapp.png';
import simon from '../../images/simon.png';
import sudoku from '../../images/sudoku.png';
import AppUI from '../Apps/AppUI'
import NavNameChanger from '../utility/NavNameChanger';
import Clipboard from '../Clipboard/Clipboard';

const Welcome = () => {
    let { authTokens } = useContext(AuthContext)
    return (
        <>
            {authTokens ?
                <>
                    <NavNameChanger navName='Apps' />
                    <NavLink to='storage'><AppUI image={cloudImg} appname='storage' /></NavLink>
                    <NavLink to='tasklogger'><AppUI image={noteimg} appname='logger' /></NavLink>
                    <NavLink to='calendar'><AppUI image={calenderimg} appname='calendar' /></NavLink>
                    <NavLink to='simon-game'><AppUI image={simon} appname='simon' /></NavLink>
                    <NavLink to='sudoku'><AppUI image={sudoku} appname='sudoku' /></NavLink>
                    <Clipboard />
                </>
                :
                <p style={{ color: 'wheat', margin: '1rem' }}>
                    if you login, you will be provided lots of features,
                    like you will get free cloud storage, various apps like
                    task logger, calendar and many more games like sudoku,
                    simon.<br />So login quickly. <br />If you are a new user,
                    then register quickly.
                </p>
            }
        </>
    )
}

export default Welcome
