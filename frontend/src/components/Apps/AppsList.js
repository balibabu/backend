import React from 'react'
import AppName from './AppName'
import noteimg from '../../images/noteapp.png';
import calenderimg from '../../images/calenderapp.png';
import simon from '../../images/simon.png';
import sudoku from '../../images/sudoku.png';
import cloudImg from '../../images/cloud.png'
import { Link } from 'react-router-dom';


function AppsList() {

    return (
        <>
            <div className="modal fade modal-fullscreen-sm-down" id='applist' tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">App Collection</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container d-flex justify-content-around">
                                <Link to='/storage' style={{ textDecoration: 'none' }}><AppName image={cloudImg} appname='Cloud' /></Link>
                                <Link to="/tasklogger" style={{ textDecoration: 'none' }}><AppName image={noteimg} appname='Note' /></Link>
                                <Link to='/calendar' style={{ textDecoration: 'none' }}><AppName image={calenderimg} appname='Calendar' /></Link>
                                <Link to='/simon-game' style={{ textDecoration: 'none' }}><AppName image={simon} appname='Simon' /></Link><br/>
                                <Link to='/sudoku' style={{ textDecoration: 'none' }}><AppName image={sudoku} appname='Sudoku' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppsList