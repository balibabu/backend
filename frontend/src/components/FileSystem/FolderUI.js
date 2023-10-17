import { useContext, useState } from "react";
import updateFolderTitle from "./methods/updateFolderTitle";
import AuthContext from "../../AuthContext";
import deleteFolder from "./methods/deleteFolder";
import folderIcon from '../../images/folder.png';
import dotIcon from '../../images/3dots.png';
import { useNavigate } from "react-router-dom";
import GlobalVarContext from "../../GlobalVariables";
import ActiveFolder from "../utility/ActiveFolder";

export default function FolderUI(props) {
    const { url, authTokens } = useContext(AuthContext);
    const { setCurrenFolderName } = useContext(GlobalVarContext);
    const [renaming, setRenaming] = useState(false);
    const [title, setTitle] = useState(props.folder.title)
    const navigate = useNavigate();


    const on_update_click = () => {
        updateFolderTitle(url, authTokens, title, props.folder.id, props.setFolders);
        setRenaming(false);
    }
    const on_folder_delete = () => {
        const confirmed = window.confirm("Remember Deleting folder doesnt delete your files inside it.\nAre you sure you want to delete this folder?");
        if (confirmed) {
            deleteFolder(url, authTokens, props.folder.id, props.setFolders);
        }
    }

    const on_folder_click = () => {
        // console.log(props.folder);
        navigate(`/storage/${props.folder.id}`);
    }

    return (
        <>
            {renaming ?
                <>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button onClick={on_update_click}>update</button>
                </>
                :
                <div className='m-2' style={{ backgroundColor: 'grey', display: 'inline-flex', alignItems: 'center', borderRadius: '0.5rem' }}>
                    <img src={folderIcon} className='mx-1 px-1' style={{ width: '2.5rem' }} alt="Folder Icon" />
                    <h6 className='mt-2' onClick={on_folder_click} style={{ cursor: 'pointer' }}>{props.folder.title}</h6>
                    <button type='button' data-bs-toggle="dropdown" style={{ background: 'none', border: 'none' }}>
                        <img src={dotIcon} style={{ width: '1rem' }} />
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={() => setRenaming(true)}>Rename</button></li>
                        <li><button className="dropdown-item" onClick={on_folder_delete}>Delete</button></li>
                    </ul>
                </div>
            }
        </>
    );
}

