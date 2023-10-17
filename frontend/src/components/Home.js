import React, { useContext } from 'react'
import Navbar from './Body/Navbar'
import Welcome from './Body/Welcome'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes only once
import AuthContext from '../AuthContext';
import TaskLogger from './Apps/TaskLogger/TaskLogger';
import Calendar from './Apps/calendar/Calendar';
import SimonGame from './Apps/simon/SimonGame';
import Sudoku from './Apps/sudoku/Sudoku';

function Home() {
    let { authTokens } = useContext(AuthContext)

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<><Navbar /><Welcome /></>} />
                    {authTokens && (
                        <>
                            <Route path="/tasklogger" element={<TaskLogger />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/simon-game" element={<SimonGame />} />
                            <Route path='/sudoku' element={<Sudoku/>}/>
                        </>
                    )}
                </Routes>
            </Router>
        </div>
    )
}

export default Home
