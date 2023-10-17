const getTasks = async (url,access_token) => {
    let response = await fetch(url+'/task/list/', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        }
    });
    let data = await response.json();
    if (response.status === 200) {
        return data;
    } else {
        alert('Something went wrong!');
        return null;
    }
};

export default getTasks;