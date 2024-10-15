import { UserProvider } from "../context/UserContext";
export const ContextProvider = ({ children }:{children:any}) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
}