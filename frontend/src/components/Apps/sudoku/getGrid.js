export default async function getGrid(url,access_token){
    try{
        let response=await fetch(url+'/game/sudoku/grid/',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });
        let data=await response.json();
        if(response.status===200){
            return data;
        }else{
            alert('something went wrong');
        }
    }catch(errors){
        console.log(errors);
    }
}