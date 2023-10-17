export default async function updateTask(url, access_token, id, jsondata, setTasks) {
    let response = await fetch(`${url}/task/update/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        },
        body:JSON.stringify(jsondata)
    });
    if(response.ok){
        setTasks(prevTasks=>{
            return prevTasks.map(task=>{
                if(task.id===id){
                    return {...task,...jsondata};
                }
                return task;
            });
        });
    }else{
        console.log(response);
    }
}