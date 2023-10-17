import React, { useContext, useEffect } from 'react'
import GlobalVarContext from '../../GlobalVariables';

function NavNameChanger({ navName }) {
    const { setNavName } = useContext(GlobalVarContext);
    useEffect(() => {
        setNavName(navName);
    }, []);
    return (<></>);
}

export default NavNameChanger;