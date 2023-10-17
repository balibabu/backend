async function deleteTask(url,access_token,pk) {
    try {
      // const csrftoken = getCookie('csrftoken'); // Assuming you have a function to get the CSRF token
      // var url_local = `http://127.0.0.1:8000/api/task-delete/${pk}/`
      var url_hosted = `${url}/task/delete/${pk}/`
      const response = await fetch(url_hosted, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + access_token
        },
      });
  
      if (!response.ok) {
        return false
      }
      return true
    } catch (error) {
        alert('Error deleting task:', error);
        return false
    }
  }
  
  export default deleteTask