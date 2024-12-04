import {createContext, useState} from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [username, setUsername] = useState('')

    const authValue = {
        username: username,
        setUsername: setUsername,
    };

    return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;