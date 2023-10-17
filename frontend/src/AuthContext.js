import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => {
        const storedTokens = localStorage.getItem('authTokens');
        return storedTokens ? JSON.parse(storedTokens) : null;
    });

    const loginUser = (token) => {
        setAuthTokens(token);
        localStorage.setItem('authTokens', JSON.stringify(token));
    };

    const logoutUser = () => {
        setAuthTokens(null);
        localStorage.removeItem('authTokens');
    };

    useEffect(() => {
        const storedTokens = localStorage.getItem('authTokens');
        if (!storedTokens) {
            setAuthTokens(null);
        }
    }, []);

    var url_localhost = 'http://127.0.0.1:8000'
    var url_ngrock_static = "https://seriously-direct-unicorn.ngrok-free.app"
    var urls = [url_localhost, url_ngrock_static]
    const contextData = {
        authTokens,
        loginUser,
        logoutUser,
        url: urls[0],  // change here  1-> for ngrok
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};
