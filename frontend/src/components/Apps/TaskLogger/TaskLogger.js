import React, { useState, useEffect, useContext } from 'react';
import Task from './Task';
import CreateTask from './CreateTask';
import deleteTask from './methods/deleteTask';
import getTasks from './methods/getTasks';
import AuthContext from '../../../AuthContext';
import updateTask from './methods/updateTask';
import NavNameChanger from '../../utility/NavNameChanger';

function TaskLogger() {
    const [tasks, setTasks] = useState([]);
    const { url, authTokens } = useContext(AuthContext);

    async function delete_task(id) {
        const confirmed = window.confirm("Remember Deleting folder doesnt delete your files inside it.\nAre you sure you want to delete this folder?");
        if (confirmed) {
            const d = await deleteTask(url, authTokens.access, id)
            if (d) {
                setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTasks(url, authTokens.access);
                if (data !== null) {
                    setTasks(data);
                }
            } catch (error) {
                alert('Error fetching tasks:', error);
            }
        };
        fetchData();

    }, [url, authTokens.access]);

    const on_edit_update = (id, jsondata) => {
        updateTask(url, authTokens.access, id, jsondata, setTasks);
    }

    return (
        <div className="ms-4 me-10 mt-2">
            <NavNameChanger navName='Task Logger' />
            {/* <h1 style={{ color: 'skyblue' }}>Your Tasks</h1> */}
            <div className="d-flex flex-wrap ">
                <CreateTask setTasks={setTasks} />
                {tasks.map(task => (
                    <Task key={task.id} task={task} deleteHandler={delete_task} on_edit_update={on_edit_update} />
                ))}
            </div>
        </div>
    );
}

export default TaskLogger;
