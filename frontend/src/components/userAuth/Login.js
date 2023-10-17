import React, { useContext, useState } from 'react'
import AuthContext from '../../AuthContext';
import { login } from '../methods/login';
// import jwt_decode from "jwt-decode"


function Login() {
    var emptyfields = { "username": "", "password": "" }
    const [credentials, setCredentials] = useState(emptyfields);
    let {url,loginUser} = useContext(AuthContext)

    const on_change = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    }
    
    const sumbit= async (e)=>{
        e.preventDefault()
        let {isValid,message}=checkValidity(credentials)
        if(isValid){
            var data= await login(url,credentials)
            if(data){
                loginUser(data)
                setCredentials(emptyfields)
                // console.log(jwt_decode(data.access));
            }
        }else{
            console.log(message);
        }
    }

    return (
        <>
            <div className="modal fade" id="login-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Login Page</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={sumbit}>
                                <div className='mx-3'>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Username</span>
                                        <input type="text" className="form-control" name='username' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={on_change} value={credentials.username} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                                        <input type="password" className="form-control" name='password' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={on_change} value={credentials.password} />
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <div className="input-group">
                                        <button className="btn btn-secondary col-6" type="button" data-bs-dismiss="modal">Close</button>
                                        <button className="btn btn-primary col-6" type="submit" data-bs-dismiss="modal">Login</button>
                                    </div>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Login

function checkValidity(credentials) {
    if (credentials.username === '') return { 'isValid': false, 'info': 'username cant be empty' }
    if (credentials.password === '') return { 'isValid': false, 'info': 'password cant be empty' }
    return { 'isValid': true, 'info': 'success' }
}