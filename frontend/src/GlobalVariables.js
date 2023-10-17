import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const GlobalVarContext = createContext()
export default GlobalVarContext;

export const GlobalVarProvider = ({ children }) => {
    const { authTokens } = useContext(AuthContext);
    const [navName, setNavName] = useState('Not Logged');
    const [currenFolderName, setCurrenFolderName] = useState('Home');
    const [alert, setAlert] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);

    useEffect(() => {
        if (authTokens) {
            setNavName('Welcome');
        } else {
            setNavName('Please Login')
        }
    }, [authTokens]);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const contextData = {
        navName,
        setNavName,
        currenFolderName,
        setCurrenFolderName,
        alert,
        showAlert,
        isSpinning,
        setIsSpinning
    }
    return (
        <GlobalVarContext.Provider value={contextData}>
            {children}
        </GlobalVarContext.Provider>
    );

}