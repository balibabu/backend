export default async function logGame(url,access_token,gameData,setGameLogs){
    let response=await fetch(url+'/game/log/',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        },body:JSON.stringify(gameData)
    });
    let data=await response.json();
    if (response.status===201){
        setGameLogs(prevLogs=>[data,...prevLogs])
    }else{
        alert('Something went wrong!')
        console.log(data);
    }
}