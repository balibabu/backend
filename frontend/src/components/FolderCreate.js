import React, { useState } from 'react'
import createFolder from './methods/createFolder';

function FolderCreate(props) {
    const [title, setTitle] = useState('');
    const on_create=()=>{
        createFolder(props.url,props.authTokens.access,{'title':title,'parent_folder_id':props.selectedFolder.id},props.setFolders)
        setTitle('');
    }
    return (
        <div className='col-md-3 p-3'>
            <div className="input-group">
                <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                <input type="text" className="form-control" name='username' value={title} onChange={(event)=>setTitle(event.target.value)}/>
                <button className="btn btn-info" onClick={on_create}>Create</button>
            </div>
        </div>
    )
}

export default FolderCreate