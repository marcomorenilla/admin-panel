import { Navigate, Route, Routes } from "react-router-dom"
import { AdminPanel } from "../app/AdminPanel"
import { UserForm } from "../app/components/UserForm"
import { UserFormRoute } from "../app/UserFormRoute"
import { NavBar } from "../app/components/NavBar"
export const AppRoutes = ({currentUser, handleLogOut, handleAddUsers, emptyFormData, selectedUser}) => {
    return(
        <>
        <NavBar currentUser={currentUser} handleLogOut={handleLogOut}/>
        <Routes>
            <Route path="/*" element={<Navigate to="/users"/>}/>
            <Route path="users" element={<AdminPanel />}/>
            <Route path="users/register" element={<UserFormRoute handleAddUsers={handleAddUsers} emptyFormData={emptyFormData}/>}/>
        </Routes>
        </>
    )
}