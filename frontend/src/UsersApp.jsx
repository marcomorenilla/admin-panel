
import { Navigate, Route, Routes } from "react-router-dom"

import { LoginPage } from "./auth/LoginPage"
import { AppRoutes } from "./routes/AppRoutes"
import { useContext } from "react"
import { AuthContext } from "./auth/context/AuthContext"



export const UsersApp = () => {
    
    
    const { currentUser } = useContext(AuthContext)

    return (<Routes>
        {

            !currentUser.isAuth ?
                <>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to="/login" />} />
                </>
                :
                <Route path="/*" element={<AppRoutes/>} />

        }


    </Routes>)
}