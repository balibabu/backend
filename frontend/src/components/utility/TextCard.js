import React, { useEffect, useState } from 'react';
import downloader from '../methods/downloader';

function TextCard(props) {
    const [text, setText] = useState('');

    useEffect(() => {
        async function fetchFile(urlpath) {
            const response = await fetch(urlpath);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            const textContent = await response.text();
            setText(textContent);
        }
        fetchFile(props.file.file)
    }, []);

    const handleDownload = () => {
        downloader(props.file)
    };

    return (
        <div className="card m-3" style={{ width: '14rem', height: '14rem', position: 'relative' }}>
            <div className="card-body">
                <h5 className="card-subtitle mb-2 text-body-secondary">{props.file.filename}</h5>
                <i className="card-text" style={{ marginBottom: '32px' }}>{text.replace(/\s/g, '').substring(0, 100) + '......'}</i>
            </div>
            <div style={{ position: 'absolute', bottom: '0.4rem', width: '90%' }}>
                <div className="input-group">
                    <button onClick={handleDownload} className="btn btn-primary btn-sm" type="button" style={{ width: '50%' }}>Download</button>
                    <button onClick={()=>{props.handleDelete(props.file.id)}} className="btn btn-outline-danger btn-sm" type="submit" style={{ width: '50%' }}>Delete</button>
                </div>
            </div>
        </div>

    );
}

export default TextCard;
