import { UserForm } from "./components/UserForm"
import { UsersTable } from "./components/UsersTable"
import { useUsers } from "./hooks/useUsers";



export const AdminPanel = () => {

    const [users, selectedUser, emptyForm, handleAddUsers, handleDeleteUsers, handleUpdateUsers] = useUsers();

    return (<>
        <h1 className="w-100 py-16 mx-auto text-3xl font-bold">Panel de Administración</h1>
        <div className="grid grid-cols-2 gap-4 sm:gap-1">
            <UserForm handleAddUsers={handleAddUsers} emptyFormData={emptyForm} selectedUser={selectedUser} />
            {users.length > 0 ?
                <UsersTable users={users} handleDeleteUsers={handleDeleteUsers} handleUpdateUsers={handleUpdateUsers} /> :
                <div className="mt-8 w-100 mx-auto">
                    <span className=" border border-yellow-500 bg-yellow-100 p-3 rounded font-bold text-yellow-500">No hay usuarios en el sistema!</span>
                </div>}
        </div>
    </>
    )
}
