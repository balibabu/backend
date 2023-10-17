export const login = async (url, credentials) => {
    try {
        let response = await fetch(url + '/api/token/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        let data = await response.json()
        console.log(data);
        if (response.status === 200) {
            return data
        } else {
            alert('Something went wrong! during logging')
            console.log(response);
            return null
        }
    } catch (error) {
        alert('Something went wrong! during logging')
        console.log(error);
        return null
    }

}