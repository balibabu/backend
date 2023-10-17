import React from 'react';
import plus from '../../images/plus.png'
import UploadModal from './UploadModal';
import CreateFolderModal from './CreateFolderModal';
const FloatButton = (props) => {

    return (
        <>
            <UploadModal selectedFolderId={props.selectedFolderId} />
            <CreateFolderModal selectedFolderId={props.selectedFolderId} />
            <div style={floatButtonContainerStyle}>
                <img src={plus} style={floatButtonStyle} data-bs-toggle="dropdown" />
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#uploadFile">Upload</button></li>
                    <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#createFolder">Create Folder</button></li>
                </ul>
            </div>
        </>
    );
};

export default FloatButton;


const floatButtonStyle = {
    borderRadius: '100px',
    width: '5rem'
};

const floatButtonContainerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
};