import React, { useRef, useState } from 'react'
import uploadFile from '../methods/uploadFile';

function UploadModal({params}) {
    const [selectedFile, setSelectedFile] = useState([]);
    const fileInputRef = useRef(null);

    const handleImageInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const submit_handler = async (event) => {
        event.preventDefault()
        fileInputRef.current.value = '';
        const data = await uploadFile(params.url, params.authTokens.access, selectedFile, params.selectedFolder.id)
        if (data) {
            params.setFiles(prevFiles => [...prevFiles, data]);
        }else{
            alert('file not uploaded');
        }
    };
    return (
        <>
            <div className="modal fade" id="uploadFile" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={submit_handler}>
                                <div className='p-3'>
                                    <div className='input-group'>
                                        <input className="form-control" type="file" id="formFile"
                                            onChange={handleImageInputChange}
                                            ref={fileInputRef}
                                        />
                                        <input type='submit' className='btn btn-primary' value='upload' data-bs-dismiss="modal"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadModal