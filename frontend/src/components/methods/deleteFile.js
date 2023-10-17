async function deleteFile(url,access_token,fileId) {
    try {
        const response = await fetch(`${url}/file/delete-file/${fileId}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${access_token}`,  // Replace with your access token
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 204) {
            // console.log('File deleted successfully');
            return true
        } else if (response.status === 404) {
            console.log('File not found');
            return false
        } else {
            console.log('Error deleting file');
            return false
        }
    } catch (error) {
        alert('An error occurred', error);
        return false
    }
}

export default deleteFile;