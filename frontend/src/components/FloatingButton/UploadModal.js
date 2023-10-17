import React, { useContext, useRef, useState } from 'react'
import uploadFile from '../methods/uploadFile';
import AuthContext from '../../AuthContext';
import AllFilesAndFolders from '../../FilesAndFolders';
import GlobalVarContext from '../../GlobalVariables';

function UploadModal(props) {
    const [selectedFile, setSelectedFile] = useState([]);
    const { url, authTokens } = useContext(AuthContext);
    const { setAllFiles } = useContext(AllFilesAndFolders);
    const { setIsSpinning } = useContext(GlobalVarContext);

    const fileInputRef = useRef(null);

    const handleImageInputChange = (event) => {
        setSelectedFile([...event.target.files]);
    };

    const submit_handler = async (event) => {
        event.preventDefault()
        fileInputRef.current.value = '';
        for (let i = 0; i < selectedFile.length; i++) {
            setIsSpinning(true);
            const data = await uploadFile(url, authTokens.access, selectedFile[i], props.selectedFolderId);
            if (data) {
                setAllFiles(prevFiles => [...prevFiles, data]);
            } else {
                alert(`File ${selectedFile[i].name} not uploaded`);
            }
            setIsSpinning(false);
        }
        setSelectedFile([]);
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
                                            multiple
                                        />
                                        <input type='submit' className='btn btn-primary' value='upload' data-bs-dismiss="modal" />
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