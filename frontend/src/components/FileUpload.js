import React, { useState, useRef } from 'react';
import uploadFile from './methods/uploadFile';

const FileUpload = (props) => {
    const [selectedFiles, setSelectedFiles] = useState('');
    const fileInputRef = useRef(null);

    const handleImageInputChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const submit_handler = async (event) => {
        event.preventDefault()
        fileInputRef.current.value = '';
        for(let i=0;i<selectedFiles.length;i++){
            const data=await uploadFile(props.url,props.authTokens.access,selectedFiles[i],props.selectedFolder.id)
            if(data){
                props.setFiles(prevFiles => [...prevFiles, data]);
            }else{
                alert('file not uploaded');
            }
        }
    };

    return (
        <>
            <form onSubmit={submit_handler}>
                <div className='col-md-3 p-3'>
                <div className='input-group'>
                    <input className="form-control" type="file" id="formFile"
                        onChange={handleImageInputChange}
                        ref={fileInputRef}
                        multiple
                    />
                    <input type='submit' className='btn btn-primary' value='upload'/>
                </div>
                </div>
            </form>
        </>
    );
};

export default FileUpload;

