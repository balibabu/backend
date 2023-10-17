import React, { useState } from 'react';
import archieve from '../../../images/archieve.png';
import completed from '../../../images/mark.png';
import editIcon from '../../../images/edit.png';
import deleteIcon from '../../../images/delete.png';

function Task(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [isViewMode, setIsViewMode] = useState(false);
    const [values, setValues] = useState({ 'title': props.task.title, 'description': props.task.description });
    const handleEditClick = (event) => {
        event.preventDefault();
        setIsEditing(true);
    };
    const onchange = (event) => {
        const { name, value } = event.target;
        setValues((preVal) => ({
            ...preVal,
            [name]: value,
        }));
    }
    const on_update = () => {
        props.on_edit_update(props.task.id, values)
        setIsEditing(false);
    }
    const handleDeletetClick = (event) => {
        event.preventDefault();
        props.deleteHandler(props.task.id)
    };

    return (
        <>
            {isEditing ?
                <div className='col-md-6 col-sm-9 col-lg-4 px-2' style={{background:'rgb(0, 50, 50)',borderRadius:'1rem'}}>
                    <div className="input-group mt-2">
                        <span className="input-group-text" id="inputGroup-sizing-default" style={{background:'rgb(37, 189, 250)'}}>Title</span>
                        <input
                            onChange={onchange}
                            type="text"
                            value={values.title}
                            name='title' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                            className="form-control"
                            style={{background:'rgb(37, 189, 250)'}}
                        />
                    </div>
                    <textarea
                        onChange={onchange}
                        className="form-control my-1"
                        value={values.description}
                        name='description' placeholder="" id="floatingTextarea"
                        rows={3}
                        style={{background:'rgb(37, 189, 250)'}}
                    />
                    <button className='btn btn-success' onClick={on_update}>Update</button>
                    <button className='btn btn-info mx-2' onClick={() => setIsEditing(false)}>Cancel</button>
                </div> :
                <>
                    {isViewMode ?
                        <>
                            <div className="card m-1" style={{ backgroundColor: 'skyblue', width: 'auto' }}>
                                <div className="card-body" onClick={() => setIsViewMode(true)}>
                                    <h5 className="card-title">{props.task.title}</h5>
                                    <pre className="card-text">{props.task.description}.</pre>
                                </div>
                                <div className="card-footer">
                                    <button className="card-link " onClick={() => setIsViewMode(false)}>done</button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="card m-2" style={{ backgroundColor: 'skyblue', width: '17rem', height: '10rem' }}>
                                <div className="card-body" onClick={() => setIsViewMode(true)}>
                                    <h5 className="card-title">{props.task.title}</h5>
                                    <p className="card-text">{props.task.description.substring(0, 50)}{props.task.description.length > 50 && '...'}.</p>
                                </div>
                                <div className="card-footer">
                                    <a href="/bali" className="card-link " onClick={handleEditClick}><img src={editIcon} style={imageIconStyle} title='edit' /></a>
                                    <a href="/bali" className="card-link text-danger" onClick={handleDeletetClick}><img src={deleteIcon} style={imageIconStyle} title='delete the task' /></a>
                                    <a className="card-link"><img src={archieve} style={imageIconStyle} title="archieve" /></a>
                                    <a className="card-link" onClick={() => alert()}><img src={completed} style={imageIconStyle} title='mark completed' /></a>
                                </div>
                            </div>
                        </>
                    }
                </>}
        </>
    );
}

export default Task;


const imageIconStyle = {
    width: '20px',
    height: '20px'
}