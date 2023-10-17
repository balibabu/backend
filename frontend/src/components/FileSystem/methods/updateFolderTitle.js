export default async function updateFolderTitle(url, authTokens,title,id, setFolders) {
    const apiUrl = `${url}/file/update-folder/${id}/`;
    
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authTokens.access}`
    };

    const requestData = {
        title: title
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        setFolders(prevFolders => {
            return prevFolders.map(folder => {
                if (folder.id === id) {
                    return { ...folder, title: title };
                }
                return folder;
            });
        });

    } catch (error) {
        console.error('Error updating folder title:', error);
        throw error;
    }
}
