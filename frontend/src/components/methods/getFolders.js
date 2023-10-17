async function getFolders(url, access_token, parentFolderId, setFolders, cacheFolders) {
    if (cacheFolders[parentFolderId]) {
        setFolders(cacheFolders[parentFolderId]);
    }
    try {
        const response = await fetch(url + `/file/folders/${parentFolderId}/`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        });
        if (response.ok) {
            const data = await response.json();
            cacheFolders[parentFolderId]=data;
            setFolders(data)
        } else {
            alert('Failed to fetch folders');
        }
    } catch (error) {
        alert(error);
    }
}

export default getFolders