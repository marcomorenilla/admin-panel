import { UserFormDialog } from "./components/UserFormDialog";
import { UsersTable } from "./components/UsersTable"
import { useUsers } from "./hooks/useUsers";



export const AdminPanel = () => {

    const [users, selectedUser, emptyForm, isDialogOpen, handleAddUsers, handleUpdateUsers, handleDeleteUsers, handleDialog] = useUsers();
    
    return (<>
        <div className="w-full mx-auto text-center">
            <h1 className="py-8 mt-12 mx-auto text-3xl font-bold">Panel de Administración</h1>
        </div>

        <div className="w-full mx-auto p-3">
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
