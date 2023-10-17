import React, { useContext, useState } from 'react'
import createTask from './methods/createTask';
import AuthContext from '../../../AuthContext';

function CreateTask(props) {
    const [fields, setFields] = useState({ 'title': '', 'description': '' });
    const { url,authTokens } = useContext(AuthContext);
    const on_add_click = (event) => {
        event.preventDefault()
        createTask(url,authTokens.access, fields,props.setTasks);
        setFields({ 'title': '', 'description': '' })
    }
    const onchange = (event) => {
        const { name, value } = event.target;
        setFields((prevFields) => ({
            ...prevFields,
            [name]: value,
        }));
    }
    return (
        <>
            <div className="card mx-2 my-2 px-2" style={{ backgroundColor: 'rgb(76, 201, 250)', width: '25rem',  borderRadius: '1rem' }}>
                <div className="card-body px-0 py-2">
                    <h5 className="card-title mt-1">
                        <div className="input-group">
                            <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                            <input type="text" onChange={onchange} value={fields.title} name='title' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </h5>
                    <div className="card-text mb-2">
                        <div className="form-floating">
                            <textarea className="form-control" onChange={onchange} value={fields.description} name='description' placeholder="" id="floatingTextarea" />
                            <label htmlFor="floatingTextarea">Description</label>
                        </div>
                    </div>
                    <a href="#add_task" onClick={on_add_click} className="card-link d-flex justify-content-around" style={{ backgroundColor: 'lightgreen', borderRadius: '0.5rem', textDecoration: 'none' }}><b>ADD</b></a>
                </div>
            </div>
        </>
    )
}

export default CreateTask