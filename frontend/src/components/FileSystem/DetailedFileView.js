import React, { useContext } from 'react'
import dots from '../../images/3dots.png';
import downloader from '../methods/downloader';
import AuthContext from '../../AuthContext';
import deleteFile from '../methods/deleteFile';

function DetailedFileView(props) {
    const { url, authTokens } = useContext(AuthContext);
    const on_delete = async (id) => {
        const res = await deleteFile(url, authTokens.access, id);
        if (res) {
            props.setFiles((previousFiles) =>
                previousFiles.filter((file) => file.id !== id)
            );
        }
    }
    return (
        <>
            {props.files.length ?
                <div className='px-3 p-2'>
                    <table className="table table-dark table-hover" >
                        <thead>
                            <tr>
                                <th scope="col">Filename</th>
                                <th scope="col">Uploaded On</th>
                                <th scope="col">File size</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.files.map(file => (
                                <tr key={file.id}>
                                    <td onDoubleClick={() => openFileInNewTab(file.file)}
                                        style={{ cursor: 'pointer' }}>
                                        {file.filename.length > 15 ? file.filename.substring(0, 10) + '...' + file.filename.slice(-5) : file.filename}
                                    </td>
                                    <td>{formatDateTime(file.uploaded_on)}</td>
                                    <td>na kb</td>
                                    <td>
                                        <button type='button' data-bs-toggle="dropdown" style={{ background: 'none', border: 'none' }}>
                                            <img src={dots} style={{ width: '1rem' }} />
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><button className="dropdown-item" onClick={() => openFileInNewTab(file.file)}>View</button></li>
                                            <li><button className="dropdown-item" onClick={() => downloader(file)}>Download</button></li>
                                            <li><button className="dropdown-item" onClick={() => on_delete(file.id)}>Delete</button></li>
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> :
                <>
                    <h1>There is no file in this folder</h1>
                </>}
        </>
    )
}

export default DetailedFileView


function formatDateTime(datetime) {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours());
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const openFileInNewTab = (fileUrl) => {
    window.open(fileUrl, '_blank');
};