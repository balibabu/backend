import React, { useContext, useState } from 'react'
import createFolder from '../methods/createFolder';
import AuthContext from '../../AuthContext';
import AllFilesAndFolders from '../../FilesAndFolders';

function CreateFolderModal(props) {
    const [title, setTitle] = useState('');
    const { url, authTokens } = useContext(AuthContext);
    const { setAllFolders,getChildrenFolders } = useContext(AllFilesAndFolders);
    
    const on_create = () => {
        var id=props.selectedFolderId;
        var folders;
        if(id==='null'){
            folders=getChildrenFolders(null);
        }else{
            folders=getChildrenFolders(Number(id));
        }
        if(isTitleValid(title,folders)){
            createFolder(url, authTokens.access, { 'title': title, 'parent_folder_id': props.selectedFolderId }, setAllFolders)
            setTitle('');
        }else{
            alert('cant create duplicate folder');
        }
    }
    return (
        <>
            <div className="modal fade" id="createFolder" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="input-group">
                                <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                                <input type="text" className="form-control" name='username' value={title} onChange={(event) => setTitle(event.target.value)} />
                                <button className="btn btn-info" onClick={on_create}  data-bs-dismiss="modal">Create</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateFolderModal


function isTitleValid(title,folders){
    for(var i=0;i<folders.length;i++){
        if(folders[i].title.toLowerCase()===title.toLowerCase()){
            return false;
        }
    }
    return true;
}