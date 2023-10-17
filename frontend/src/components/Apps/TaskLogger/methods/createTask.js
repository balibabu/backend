const createTask = async (url,access_token,jsondata,setTasks) => {
    let response = await fetch(url+'/task/add/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        },body:JSON.stringify(jsondata)
    });
    let data = await response.json();
    if (response.status === 201) {
        setTasks(prevFiles => [...prevFiles, data]);
    } else {
        alert('Something went wrong!');
        return null;
    }
};

export default createTask;