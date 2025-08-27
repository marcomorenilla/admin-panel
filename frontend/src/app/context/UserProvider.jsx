import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext";

export const UserProvider =({children}) =>{
    
    const [users, selectedUser, emptyForm, isDialogOpen, handleAddUsers, handleUpdateUsers, handleDeleteUsers, handleDialog] = useUsers();

    return(<UserContext.Provider value={
        {
            users,
            selectedUser,
            emptyForm,
            isDialogOpen,
            handleAddUsers,
            handleUpdateUsers,
            handleDeleteUsers,
            handleDialog
        }
    }>
    {children}
    </UserContext.Provider>)
}