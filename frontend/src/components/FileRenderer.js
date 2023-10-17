import React, { useState } from 'react';
import ImageCard from './utility/ImageCard';
import TextCard from './utility/TextCard';
import OtherCard from './utility/OtherCard';
import deleteFile from './methods/deleteFile';
import Preview from './utility/Preview';

function FileRenderer(props) {
    const { files } = props;
    const [selectedFile, setSelectedFile] = useState('');

    if (files.length === 0) {
        return <h1>No files</h1>
    }

    const handleDelete = async (id) => {
        const res = await deleteFile(props.url, props.authTokens.access, id);
        if (res) {
            props.setFiles((previousFiles) =>
                previousFiles.filter((file) => file.id !== id)
            );
        }
    }

    const Categorize = ({ file }) => {
        if (isImage(file.file)) {
            return <ImageCard file={file} handleDelete={handleDelete} setSelectedFile={setSelectedFile}/>
        }
        if (isText(file.file)) {
            return <TextCard file={file} handleDelete={handleDelete} />
        }
        return <OtherCard file={file} handleDelete={handleDelete} />
    }

    function onFileClicked() {
        return <div className='col-md-12'>
            <h4>{selectedFile.filename?.substring(0, 37)}</h4>
            <img src={selectedFile.file} style={{width:'30rem'}}/>
        </div>
    }

    return (
        <>
            {files.map((file) => (
                <Categorize file={file} key={file.id} />
            ))}
            <Preview>{onFileClicked()}</Preview>
        </>
    );
}

export default FileRenderer;


function isImage(filename) {
    const imageExtensions = /\.(jpg|jpeg|png|gif)$/i;
    return imageExtensions.test(filename);
}

function isText(filename) {
    const imageExtensions = /\.(txt)$/i;
    return imageExtensions.test(filename);
}

// function extractfilename(url) {
//     const parts = url.split('/');
//     const filenameWithExtension = parts[parts.length - 1];
//     const filenameWithoutExtension = filenameWithExtension.split('.')[0];
//     return filenameWithoutExtension;
// }