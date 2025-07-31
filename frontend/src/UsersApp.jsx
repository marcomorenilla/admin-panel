import { useEffect, useReducer, useState } from "react"
import { AdminPanel } from "./app/AdminPanel"
import { LoginPage } from "./auth/LoginPage"
import Swal from "sweetalert2"
import { loginReducer } from "./auth/reducers/loginReducer"


export const UsersApp = () => {
    const initialUser = JSON.parse(sessionStorage.getItem('currentUser')) || {
        isAuth: false,
        user: undefined
    }

    const [currentUser, dispatch] = useReducer(loginReducer, initialUser)

    useEffect(() => {
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    }, [currentUser])

    const handleLogin = ({ username, password }) => {
        if (!username || !password) {
            Swal.fire('Error', 'Username y password no pueden estar vacíos', 'error')
        } else {
            if (username == 'admin' && password == '1234') {
                dispatch({
                    type: 'login',
                    user: {
                        username,
                        password
                    }
                })
            } else {
                Swal.fire('Error', 'Nombre de usuario o contraseña no encontrados', 'error')
            }
        }
    }

    const handleLogOut = () => {
        dispatch({
            type:'logout'
        })
        sessionStorage.removeItem('currentUser')
    }
    return (<>
        {
            !currentUser.isAuth ?
                <LoginPage handleLogin={handleLogin} /> :
                <AdminPanel currentUser={currentUser.user} handleLogOut={handleLogOut} />
        }


    </>)
}