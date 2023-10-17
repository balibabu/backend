import React, { useState } from 'react'
import Board from './Board'
import NavNameChanger from '../../utility/NavNameChanger';

function Sudoku() {
    const [isGameOn, setIsGameOn] = useState(false);

    return (
        <>
            <NavNameChanger navName='Sudoku' />
            {isGameOn ?
                <>
                    <Board setIsGameOn={setIsGameOn} />
                </>
                :
                <>
                    <h1>Please start the game</h1>
                    <button onClick={() => setIsGameOn(true)}>start</button>
                </>
            }
        </>
    )
}

export default Sudoku