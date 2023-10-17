import React from 'react'
import iconStyle from '../../images/iconStyle';
function AppUI(props) {
    return (
        <div style={{display: 'inline-flex', padding:'2rem'}}>
            <div
                className="card text-center border-0 d-flex flex-column align-items-center justify-content-center"
                style={{ width: "5.5rem", height: '5.5rem' }}>
                <img src={props.image} className="card-img-top" alt={props.appname} style={iconStyle} />
                <div className="card-body p-0">
                    <b className="card-text text-truncate">{props.appname}</b>
                </div>
            </div>
        </div>
    );
}

export default AppUI;