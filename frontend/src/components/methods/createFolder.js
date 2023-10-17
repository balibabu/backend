const createFolder = async (url, access_token, data, setFolders) => {
    try {
        const response = await fetch(url + '/file/create-folder/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const newFolder = await response.json();
            setFolders(prevFolders => [...prevFolders, newFolder]);
        } else {
            const errorResponse = await response.json();
            console.log('Error:', errorResponse);
        }
    } catch (error) {
        console.error('Request error:', error);
    }
};

export default createFolder;
