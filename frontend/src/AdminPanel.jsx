import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm"
import { UsersTable } from "./components/UsersTable"
import { usersReducer } from "./reducers/usersReducer";


export const AdminPanel = () => {
    const userList = [{
        id:1,
        username: 'prueba',
        email:'prueba@correo.es'
    }]

    const[users, dispatch] =  useReducer(usersReducer, userList);

    const handleAddUsers = (user) =>{
        dispatch({
            type: 'add',
            user: user
        })
    }

    return (<>
        <h1 className="w-100 py-16 mx-auto text-3xl font-bold">Panel de Administración</h1>
        <div className="grid grid-cols-2 gap-4">
            <UserForm handleAddUsers={handleAddUsers}/>
            <UsersTable users={users}/>
        </div>
    </>
    )
}
