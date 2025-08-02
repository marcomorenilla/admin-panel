import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

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
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleAddUsers = (user) => {
        console.log(`user to be added - ${JSON.stringify(user)}`)
        dispatch({
            type: user.id != 0 ? 'update' : 'add',
            user: user
        })
        setIsDialogOpen(false)
        Swal.fire({
            title: `${user.id != 0 ? 'Actualizando' : 'Creando'} usuario`,
            text: user.id != 0 ? 'Usuario actualizado!' : 'Usuario creado',
            icon: "success"
        });


    }

    const handleDeleteUsers = (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Una vez eliminado no se podrá recuperar al usuario",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, elimínalo"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'del',
                    id: id
                })
                Swal.fire({
                    title: "Eliminado!",
                    text: "Usuario eliminado correctamente",
                    icon: "success"
                });
            }
        });

    }

    const handleUpdateUsers = (user) => {
        console.log(`selected user - ${selectedUser} `)
        setIsDialogOpen(true)
        setSelectedUser({ ...user });
    }


    const handleDialog = (isVisible) => {
        if (isVisible) {
            setIsDialogOpen(true)
        } else {
            setSelectedUser(emptyForm)
            setIsDialogOpen(false)
        }
    }


    return [
        users,
        selectedUser,
        emptyForm,
        isDialogOpen,
        handleAddUsers,
        handleUpdateUsers,
        handleDeleteUsers,
        handleDialog
    ]

}
