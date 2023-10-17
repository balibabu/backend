import React, { useContext } from 'react'
import AuthContext from './AuthContext';

function Test() {
    const { url, authTokens } = useContext(AuthContext);

    return (
        <div>
        <p>{url}</p>
        <p>{authTokens.access}</p>
        </div>
    )
}

export default Test;