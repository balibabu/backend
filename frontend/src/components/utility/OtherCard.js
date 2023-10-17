import React from 'react'
import downloader from '../methods/downloader';
import img from '../../images/unknownImg.png';

function OtherCard(props) {
    const handleDownload = () => {
        downloader(props.file)
    };
    return (
        <>
            <div className="card m-3 m-3" style={{ width: '14rem', height: '14rem' }}>
                <img
                    src={img}
                    className="card-img-top mt-2"
                    style={{ width: 'auto', height: '8.5rem' }}
                    alt={props.file.file}
                />
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.file.filename}</h6>
                    <div className="input-group">
                        <button onClick={handleDownload} className="btn btn-primary btn-sm col-6" type="button">Download</button>
                        <button onClick={()=>{props.handleDelete(props.file.id)}} className="btn btn-outline-danger btn-sm col-6" type="submit">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherCard