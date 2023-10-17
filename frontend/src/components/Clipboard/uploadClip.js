const uploadClip = async (clipboardContent,url,authTokens) => {
    const formData = new FormData();
    formData.append('content', clipboardContent);
    const response = await fetch(url + '/clips/upload-clip/', {
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + authTokens.access
        },
        body: formData,
    });
    if (!response.ok) {
        console.log('Failed to upload files');
    }
}

export default uploadClip;