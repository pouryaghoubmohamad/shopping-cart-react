import React, { createContext, useContext, useEffect, useState } from "react";

const AuthProviderContext = createContext();
const AuthProviderContextDispatch = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

const AuthProvider = ({ children }) => {
    const [state, setState] = useState();

    useEffect(() => {
        const userData =
            JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
        setState(userData);
    }, []);

    useEffect(() => {
        const data = JSON.stringify(state);
        localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
    }, [state]);
    return (
        <AuthProviderContext.Provider value={state}>
            <AuthProviderContextDispatch.Provider value={setState}>
                {children}
            </AuthProviderContextDispatch.Provider>
        </AuthProviderContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthACtion = () => useContext(AuthProviderContextDispatch);
