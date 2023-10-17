const getFiles = async (url,access_token,parentFolderId, setFiles,cacheFiles) => {
    if(cacheFiles[parentFolderId]){
        setFiles(cacheFiles[parentFolderId])
    }
    try {
        const response = await fetch(url+`/file/files/${parentFolderId}/`,{
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        });
        if (response.ok) {
            const data = await response.json();
            cacheFiles[parentFolderId]=data;
            setFiles(data)
        } else {
            alert('Failed to fetch files');
            return null
        }
    } catch (error) {
        alert(error);
        return null
    }
}

export default getFiles;