export default async function tellSolved(url,access_token,setLogs){
    try{
        let response=await fetch(url+'/game/sudoku/update-level/',{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            },
            body:JSON.stringify({'level':'completed'})
        });
        if(response.ok){
            console.log(response);
        }
        console.log(response);
    }catch(errors){
        console.log(errors);
    }
}