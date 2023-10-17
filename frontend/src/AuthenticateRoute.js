import React, { useContext } from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom'
import Navbar from './components/Body/Navbar';
import Welcome from './components/Body/Welcome';
import AuthContext from './AuthContext';
import TaskLogger from './components/Apps/TaskLogger/TaskLogger';
import Calendar from './components/Apps/calendar/Calendar';
import SimonGame from './components/Apps/simon/SimonGame';
import Sudoku from './components/Apps/sudoku/Sudoku';
import NotFound from './components/NotFound';
import Folder from './components/FileSystem/Folder';
import StorageLayout from './components/FileSystem/StorageLayout';
import Drive from './components/FileSystem/Drive';


function AuthenticateRoute() {
    let { authTokens } = useContext(AuthContext);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Navbar />}>
                <Route index element={<Welcome />} />
                {authTokens && <>
                    <Route path='storage' element={<StorageLayout />}>
                        <Route index element={<Drive />} />
                        <Route path=":id" element={<Folder />} />
                    </Route>
                    <Route path='tasklogger' element={<TaskLogger />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="simon-game" element={<SimonGame />} />
                    <Route path='sudoku' element={<Sudoku />} />
                </>}
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default AuthenticateRoute;