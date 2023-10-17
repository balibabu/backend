const getAllFiles = async (url, authTokens, setFiles) => {
    try {
        const response = await fetch(url + `/file/files/`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + authTokens.access
            }
        });
        if (response.ok) {
            const data = await response.json();
            setFiles(data)
        } else {
            console.log(response);
        }
    } catch (error) {
        console.log(error);
    }
}

export default getAllFiles;