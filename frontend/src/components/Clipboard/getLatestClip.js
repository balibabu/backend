const getLatestClip = async (url,authTokens,setClips) => {
    const response = await fetch(url + '/clips/list/', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + authTokens.access,
        }
    });
    if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
            setClips(data)
            navigator.clipboard.writeText(data[data.length - 1].content)
        }
    } else {
        alert('Failed to fetch files');
    }
}


export default getLatestClip;