export default async function getSimonGameLogs(url,access_token,setGameLogs){
    try{
        let response=await fetch(url+'/game/logs/simon',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
        let data=await response.json();
        if(response.status===200){
            setGameLogs(data);
        }else{
            alert('something went wrong');
        }
    }catch(errors){
        console.log(errors);
    }
}