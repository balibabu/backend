import React, { useContext, useEffect, useState } from 'react';
import './Sudoku.css'
import isSudokuSolved from './isSudokuSolved';
import AuthContext from '../../../AuthContext';
import getGrid from './getGrid';
import tellSolved from './tellSolved';
import saveGameState from './saveGameState';
import GlobalVarContext from '../../../GlobalVariables';


function Board(props) {
    const { showAlert } = useContext(GlobalVarContext);
    const { url, authTokens } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [initialGrid, setInitialGrid] = useState();
    const [grid, setGrid] = useState();


    useEffect(() => {
        const fetch = async () => {
            const data = await getGrid(url, authTokens.access);
            setInitialGrid(data.initialGrid)
            setIsLoading(false)
            if (data.savedState) {
                setGrid(deepCopyArray(data.savedState))
            } else {
                setGrid(deepCopyArray(data.initialGrid))
            }
        }
        fetch()
    }, [])

    const renderCell = (value, row, col) => {
        if (value === 0) {
            return <input
                type="text"
                value={grid[row][col] ? grid[row][col]: ''}
                onChange={(event) => on_grid_cell_change(row, col, event)}
            />;
        }
        return value;
    };

    const on_grid_cell_change = (row, col, event) => {
        setGrid(prevGrid => {
            const newGrid = [...prevGrid];
            const value=event.target.value
            newGrid[row][col] = Number(value[value.length-1]);
            return newGrid;
        });
    }

    const is_sudoku_solved = () => {
        if(isSudokuSolved(grid)){
            tellSolved(url,authTokens.access,null)
            props.setIsGameOn(false);
            showAlert('Your solution is correct','success');
        }else{
            showAlert('your solution is incorrect','danger')
        }
    }

    const save_game=async ()=>{
        const result=await saveGameState(url,authTokens.access,grid)
        if(result){
            showAlert('Successfully game saved','success');
            props.setIsGameOn(false);
        }else{
            showAlert('Something went wrong, game didnt save','danger');
        }
    }
    
    const quitHandler=()=>{
        const confirmed = window.confirm("Are you sure, you wanna quit? \nyour progress will be lost");
        if(confirmed){
            props.setIsGameOn(false);
        }
    }

    return (
        <>
            {isLoading ?
                <>
                    <h1>Loading, please wait</h1>
                </>
                :
                <>
                    <button className='btn btn-success' onClick={is_sudoku_solved}>Check</button>
                    <button className='btn btn-info' onClick={quitHandler}>quit</button>
                    <button className='btn btn-primary' onClick={save_game}>save</button>
                    <div className="sudoku-container">
                        <table className="sudoku-grid">
                            <tbody>
                                {initialGrid.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, colIndex) => (
                                            <td key={colIndex}>{renderCell(cell, rowIndex, colIndex)}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>}

        </>
    );
}

export default Board;


function deepCopyArray(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }

    const copy = [];
    for (const item of arr) {
        copy.push(deepCopyArray(item));
    }
    return copy;
}