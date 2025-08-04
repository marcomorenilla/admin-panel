import { Navigate, Route, Routes } from "react-router-dom"
import { AdminPanel } from "../app/AdminPanel"
import { UserFormRoute } from "../app/UserFormRoute"
import { NavBar } from "../app/components/NavBar"
export const AppRoutes = ({ currentUser, handleLogOut, users, selectedUser, emptyFormData, isDialogOpen, handleAddUsers, handleUpdateUsers, handleDeleteUsers, handleDialog}) => {
    return(
        <>
        <NavBar currentUser={currentUser} handleLogOut={handleLogOut}/>
        <Routes>
            <Route path="/*" element={<Navigate to="/users"/>}/>
            <Route path="users" element={<AdminPanel users={users}
            selectedUser={selectedUser}
            emptyFormData={emptyFormData}
            isDialogOpen={isDialogOpen}
            handleAddUsers={handleAddUsers}
            handleUpdateUsers={handleUpdateUsers}
            handleDeleteUsers={handleDeleteUsers}
            handleDialog={handleDialog}
            />}/>
            <Route path="users/register" element={<UserFormRoute  handleAddUsers={handleAddUsers} emptyFormData={emptyFormData}/>}/>
            <Route path="users/update" element={<UserFormRoute  handleAddUsers={handleAddUsers} emptyFormData={emptyFormData} handleUpdateUsers={handleUpdateUsers} />}/>
        </Routes>
        </>
    )
}