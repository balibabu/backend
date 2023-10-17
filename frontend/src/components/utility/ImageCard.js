import React from 'react'
import downloader from '../methods/downloader';
import img from '../../images/img.png';

function ImageCard(props) {
    const handleDownload = () => {
        downloader(props.file)
    };
    return (
        <>
            <div className="card m-3" style={{ width: '14rem', height: '14rem' }}>
                <img
                    src={props.file.file}
                    className="card-img-top "
                    style={{ width: 'auto', height: '9.5rem' }}
                    alt={props.file.file}
                    onClick={()=>props.setSelectedFile(props.file)}
                    data-bs-toggle="modal" data-bs-target="#previewModal"
                />
                <h5 className="card-title text-truncate">{props.file.filename}</h5>
                <div className="input-group">
                    <button onClick={handleDownload} className="btn btn-primary btn-sm col-6 mb-1" type="button">Download</button>
                    <button onClick={()=>{props.handleDelete(props.file.id)}} className="btn btn-outline-danger btn-sm col-6 mb-1" type="submit">Delete</button>
                </div>
            </div>
        </>
    )
}

export default ImageCard