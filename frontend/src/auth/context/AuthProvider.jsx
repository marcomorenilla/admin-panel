import { AuthContext } from "./AuthContext"
import { useAuth } from "../hooks/useAuth"  

export const AuthProvider =({children}) =>{

    const [currentUser, handleLogIn, handleLogOut] = useAuth()

    return(<AuthContext.Provider value={
        {
            currentUser,
            handleLogIn,
            handleLogOut
        }
    }>
    {children}
    </AuthContext.Provider>)
}