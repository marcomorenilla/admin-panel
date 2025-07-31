import { NavBar } from "./components/NavBar";
import { UserFormDialog } from "./components/UserFormDialog";
import { UsersTable } from "./components/UsersTable"
import { useUsers } from "./hooks/useUsers";



export const AdminPanel = ({currentUser}) => {
    console.log(currentUser)
    const [users, selectedUser, emptyForm, isDialogOpen, handleAddUsers, handleUpdateUsers, handleDeleteUsers, handleDialog] = useUsers();
    
    return (<>
        <NavBar currentUser={currentUser}/>
        
        <div className="w-full mx-auto p-3 mt-40">
            <UserFormDialog handleAddUsers={handleAddUsers} emptyForm={emptyForm} selectedUser={selectedUser} isDialogOpen={isDialogOpen} handleDialog={handleDialog} />
            <div className="mt-1 w-100 mx-auto text-center">
                <button type="button" className="p-2 font-bold bg-blue-600 rounded text-white hover:bg-blue-700 hover:shadow-lg"
                    onClick={() => handleDialog(true)}>
                    Añadir usuario
                </button>
            </div>
            {users.length > 0 ?
                <UsersTable users={users} handleDeleteUsers={handleDeleteUsers} handleUpdateUsers={handleUpdateUsers} handleDialog={handleDialog} /> :
                <div className="mt-8 w-100 mx-auto text-center">
                    <span className=" border border-yellow-500 bg-yellow-100 p-3 rounded font-bold text-yellow-500">No hay usuarios en el sistema!</span>
                </div>}
        </div>
    </>
    )
}
