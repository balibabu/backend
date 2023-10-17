import React, { useContext, useEffect, useState } from 'react'
// import FileUpload from './FileUpload';
import FileRenderer from './FileRenderer';
import AuthContext from '../AuthContext';
import getFiles from './methods/getFiles';
// import FolderCreate from './FolderCreate';
import getFolders from './methods/getFolders';
import Folder from './FolderUI/Folder';
import FloatButton from './FloatingButton/FloatButton';
import NavbarForFiles from './FileSystem/NavbarForFiles';
import DetailedFileView from './FileSystem/DetailedFileView';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

var cacheFiles = {};
var cacheFolders = {};

function FileSystem() {
    const { url, authTokens } = useContext(AuthContext);
    const [files, setFiles] = useState([]);
    const [selectedFolder, setSelectedFolder] = useState([{ 'id': null, 'title': 'Home' }]);
    const [folders, setFolders] = useState([]);
    const [path, setPath] = useState();
    const [layout, setLayout] = useState('bar');


    useEffect(() => {
        getFiles(url, authTokens.access, selectedFolder[selectedFolder.length - 1].id, setFiles, cacheFiles)
        getFolders(url, authTokens.access, selectedFolder[selectedFolder.length - 1].id, setFolders, cacheFolders);
        const folderTitles = selectedFolder.map(folder => folder.title);
        const joinedPath = '/' + folderTitles.join('/');
        setPath(joinedPath)
    }, [selectedFolder])

    const on_back_click = () => {
        var leng = selectedFolder.length
        if (leng > 1) {
            const newSelectedFolder = [...selectedFolder];
            newSelectedFolder.pop();
            setSelectedFolder(newSelectedFolder);
        }
    }
    const on_folder_click = (folder) => {
        setSelectedFolder(prevFolders => [...prevFolders, folder])
    }

    const dataFloatButtonNeeds = {
        url,
        authTokens,
        setFiles,
        selectedFolder: selectedFolder[[selectedFolder.length - 1]],
        setFolders
    }

    return (
        <div>
            <FloatButton params={dataFloatButtonNeeds} />
            {/* <h4 className='px-3'>path: {path}</h4> */}
            {/* <FileUpload url={url} authTokens={authTokens} setFiles={setFiles} selectedFolder={selectedFolder[[selectedFolder.length - 1]]} /> */}
            {/* <FolderCreate url={url} authTokens={authTokens} selectedFolder={selectedFolder[[selectedFolder.length - 1]]} setFolders={setFolders} /> */}
            <NavbarForFiles back={on_back_click} path={path} layout={layout} setLayout={setLayout} selectedFolder={selectedFolder[[selectedFolder.length - 1]]} />
            <div className='mx-5'>
                {folders.map((folder) => (
                    <Folder url={url} authTokens={authTokens} folder={folder} key={folder.id} on_folder_click={on_folder_click} setFolders={setFolders} />
                ))}
            </div>
            {layout === 'bar' ?
                <>
                    <div className='mx-5 mt-2'>
                        <DetailedFileView url={url} authTokens={authTokens} files={files} setFiles={setFiles} />
                    </div>
                </>
                :
                <>
                    <div className="row d-flex flex-wrap justify-content-around">
                        <FileRenderer url={url} authTokens={authTokens} files={files} setFiles={setFiles} />
                    </div>
                </>}

        </div>
    )

    // const folders_ = useLoaderData();
    // return (
    //     <div>
    //         <Link to="0">Folder 0<br /></Link>
    //         {folders_.map(folder_ => (
    //             <Link to={`${folder_}`} key={folder_}>
    //                 Folder-{folder_}<br />
    //             </Link>
    //         ))}
    //     </div>
    // );


}

export default FileSystem