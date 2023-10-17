import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import AllFilesAndFolders from '../../FilesAndFolders';
import FolderUI from './FolderUI';
import DetailedFileView from './DetailedFileView';
import FloatButton from '../FloatingButton/FloatButton';
import GlobalVarContext from '../../GlobalVariables';
import Clipboard from '../Clipboard/Clipboard';

function Folder() {
    const { id } = useParams();
    const { allFiles, allFolders, setAllFiles, setAllFolders, getFolder } = useContext(AllFilesAndFolders);
    const { currenFolderName } = useContext(GlobalVarContext);
    const folder = getFolder(id);
    return (
        <div>
            <Clipboard />
            {/* <h3 style={{ backgroundColor: 'grey', borderRadius: '1rem', paddingLeft: '1rem', margin: '1rem' }}>{id === 'null' ? 'Home' : id}</h3>
            <hr style={{ height: '0.2rem', background: 'white', margin: '1rem' }} /> */}
            <div style={{ background: 'rgb(45, 88, 88)', paddingTop: '1rem' }}>
                <h1 style={{ backgroundColor: 'grey', borderRadius: '1rem', paddingLeft: '1rem', margin: '1rem' }}>
                    {folder ? folder.title : 'Home'}
                </h1>
                {allFolders
                    .filter(folder => eval(folder.parentFolder) === eval(id))
                    .map(folder => (
                        <FolderUI key={folder.id} folder={folder} setFolders={setAllFolders} />
                    ))}
                <DetailedFileView
                    files={allFiles.filter(file => eval(file.folder) === eval(id))}
                    setFiles={setAllFiles}
                />
                <FloatButton selectedFolderId={id} />
            </div>
        </div>
    );
}

export default Folder;
