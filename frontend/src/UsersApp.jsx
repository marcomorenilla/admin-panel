
import { Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from "./auth/hooks/useAuth"
import { LoginPage } from "./auth/LoginPage"
import { AppRoutes } from "./routes/AppRoutes"
import { useUsers } from "./app/hooks/useUsers"



export const UsersApp = () => {
    const [currentUser, handleLogIn, handleLogOut] = useAuth()
    const [users, selectedUser, emptyForm, isDialogOpen, handleAddUsers, handleUpdateUsers, handleDeleteUsers, handleDialog] = useUsers();
    return (<Routes>
        {

            !currentUser.isAuth ?
                <>
                    <Route path="/login" element={<LoginPage handleLogIn={handleLogIn} />} />
                    <Route path="/*" element={<Navigate to="/login" />} />
                </>
                :
                <Route path="/*" element={<AppRoutes 
                    users={users} 
                    isDialogOpen={isDialogOpen} 
                    handleUpdateUsers={handleUpdateUsers}
                    handleDeleteUsers={handleDeleteUsers}
                    handleDialog={handleDialog}
                    handleAddUsers={handleAddUsers}
                    emptyFormData={emptyForm}
                    selectedUser={selectedUser}
                    currentUser={currentUser.user}
                    handleLogOut={handleLogOut} />} />

        }


    </Routes>)
}