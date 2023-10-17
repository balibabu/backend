import React, { useContext, useState } from 'react'
import register from '../methods/register';
import AuthContext from '../../AuthContext';

function Register() {
    var emptyfields = {
        "firstname": "",
        "lastname": "",
        "email": "",
        "username": "",
        "password1": "",
        "password2": "",
    }
    const [credentials, setCredentials] = useState(emptyfields);
    let { url } = useContext(AuthContext)
    const on_change = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    }

    const form_submit_handler = (event) => {
        event.preventDefault()
        var { isValid, info } = checkValidity(credentials)
        if (isValid) {
            register(url, {...credentials,'password':credentials.password1})
            setCredentials(emptyfields);
        } else {
            alert(info)
        }
    }


    return (
        <div>
            <div className="modal fade" id="register-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Registration Page</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className='mx-3'>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder='First Name' name='firstname' onChange={on_change} value={credentials.firstname} />
                                        <input type="text" className="form-control" placeholder='Last Name' name='lastname' onChange={on_change} value={credentials.lastname} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                        <input type="email" onChange={on_change} value={credentials.email} name='email' className="form-control" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Username</span>
                                        <input type="text" onChange={on_change} value={credentials.username} name='username' className="form-control" />
                                    </div>
                                    {/* <input type="text" className="form-control mb-3" placeholder='Enter username' name='username' onChange={on_change} value={credentials.username} /> */}
                                    <input type="password" className="form-control mb-3" placeholder='Password' name='password1' onChange={on_change} value={credentials.password1} />
                                    <input type="password" className="form-control mb-3" placeholder='enter your password again' name='password2' onChange={on_change} value={credentials.password2} />
                                </div>

                                <div className="modal-footer">
                                    <div className="input-group">
                                        <button className="btn btn-secondary col-6" type="button" data-bs-dismiss="modal">Cancel</button>
                                        <button className="btn btn-primary col-6" type="button" onClick={form_submit_handler}>Register</button>
                                    </div>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

function checkValidity(credentials) {
    if(credentials.firstname==='') return {'isValid':false,'info':'firstname cant be empty'}
    if(credentials.lastname==='') return {'isValid':false,'info':'lastname cant be empty'}
    if (credentials.username === '') return { 'isValid': false, 'info': 'username cant be empty' }
    if (credentials.email === '') return { 'isValid': false, 'info': 'email cant be empty' }
    if (credentials.password1 === '') return { 'isValid': false, 'info': 'please give a password' }
    if (credentials.password1 !== credentials.password2) return { 'isValid': false, 'info': 'password didn\'t match' }
    return { 'isValid': true, 'info': 'success' }
}