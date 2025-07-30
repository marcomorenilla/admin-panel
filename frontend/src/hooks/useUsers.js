import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

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

export const useUsers = () => {

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
        console.log(`selected user - ${selectedUser} `)
        setSelectedUser({ ...user });
    }

    return [
        users,
        selectedUser,
        emptyForm,
        handleAddUsers,
        handleUpdateUsers,
        handleDeleteUsers
    ]

}
