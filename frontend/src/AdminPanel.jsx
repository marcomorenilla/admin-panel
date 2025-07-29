import { useState } from "react";
import { UserForm } from "./components/UserForm"
import { UsersTable } from "./components/UsersTable"


export const AdminPanel = () => {
    const userList = [{
        id:1,
        username: 'prueba',
        email:'prueba@correo.es'
    }]

    const[users, setUsers] =  useState(userList);

    const handleAddUsers = (user) =>{
        const id = users.reduce((accum)=>accum + 1,1)
        user.id = id;
        setUsers([
            ...users,
            user
        ])
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
