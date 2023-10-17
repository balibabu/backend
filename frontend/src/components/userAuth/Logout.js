import React, { useContext } from 'react'
import AuthContext from '../../AuthContext'

function Logout() {
    let { logoutUser } = useContext(AuthContext)
    return (
        <>
            <div className="modal fade" id="logout" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure, you wanna logout?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={logoutUser} data-bs-dismiss="modal">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout