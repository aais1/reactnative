import { createContext, useContext } from "react";
import { useState } from "react";

const UserContext = createContext<{ user: string; setUser: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);

export const UserProvider = ({ children }:{children:any}) => {
    const [user, setUser] = useState('');
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
};

export function useUserContext(){
    const userContext=useContext(UserContext);
    if(!userContext){
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return userContext;
}