import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm"
import { UsersTable } from "./components/UsersTable"
import { usersReducer } from "./reducers/usersReducer";

const userList = [{
    id: 1,
    username: 'prueba',
    email: 'prueba@correo.es'
}]

const emptyForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}

export const AdminPanel = () => {


    const [users, dispatch] = useReducer(usersReducer, userList);
    const [selectedUser, setSelectedUser] = useState(emptyForm);

    const handleAddUsers = (user) => {
        let type;
        console.log(`user - ${user}`)
        if (user.id != 0) {
            type = 'update'
        } else {
            type = 'add'
        }

        dispatch({
            type,
            user: user
        })
    }

    const handleDeleteUsers = (id) => {
        dispatch({
            type: 'del',
            id: id
        })
    }

    const handleUpdateUsers = (user) => {
        console.log(user)
        setSelectedUser({ ...user });
    }

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
