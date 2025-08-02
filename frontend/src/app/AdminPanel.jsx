import { UserFormDialog } from "./components/UserFormDialog";
import { UsersTable } from "./components/UsersTable"




export const AdminPanel = ({users, selectedUser, emptyFormData, isDialogOpen, handleAddUsers, handleUpdateUsers, handleDeleteUsers, handleDialog}) => {
    
    
    
    return (<>
        
        
        <div className="w-full mx-auto p-3 mt-40">
            <UserFormDialog handleAddUsers={handleAddUsers} emptyFormData={emptyFormData} selectedUser={selectedUser} isDialogOpen={isDialogOpen} handleDialog={handleDialog} />
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
