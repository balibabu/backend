const uploadFile = async (url, access_token, selectedFile, selectedFolderId) => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    if (selectedFolderId != 'null') {
        formData.append('folder_id', selectedFolderId);
    }
    try {
        const response = await fetch(url + '/file/upload-file/', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + access_token
            },
            body: formData,
        });

        if (response.ok) {
            const newFile = await response.json();
            return newFile
        } else {
            alert(response);
        }
    } catch (error) {
        alert('error');
        console.log(error);
    }
};

export default uploadFile;