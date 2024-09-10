import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState(null);
    const [userDetails, setUserDetails] = useState(null); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 

    return (
        <AuthContext.Provider value={{
            authenticated, 
            setAuthenticated, 
            authToken, 
            setAuthToken,
            userDetails, 
            setUserDetails,
            loading, 
            setLoading, 
            error, 
            setError
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
