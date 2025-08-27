import { Navigate, Route, Routes } from "react-router-dom"
import { AdminPanel } from "../app/AdminPanel"
import { UserFormRoute } from "../app/UserFormRoute"
import { NavBar } from "../app/components/NavBar"
import { UserProvider } from "../app/context/UserProvider"
export const AppRoutes = () => {
    return (
        <>
            <UserProvider>
                <NavBar />
                <Routes>
                    <Route path="/*" element={<Navigate to="/users" />} />
                    <Route path="/users" element={<AdminPanel />} />
                    <Route path="/users/register" element={<UserFormRoute />} />
                    <Route path="/users/update/:id" element={<UserFormRoute />} />
                </Routes>
            </UserProvider>
        </>
    )
}