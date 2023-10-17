import React from 'react';

function AppName(props) {
    return (
        <>
            <div className="card text-center border-0" style={{ width: "4rem" }} data-bs-dismiss="modal">
                <img src={props.image} className="card-img-top px-1 pt-1" alt={props.appname} />
                <div className="card-body p-0">
                    <b className="card-text text-truncate">{props.appname}</b>
                </div>
            </div>
        </>
    );
}

export default AppName;