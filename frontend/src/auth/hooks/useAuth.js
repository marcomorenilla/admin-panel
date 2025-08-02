import { useEffect, useReducer } from "react"
import { loginReducer } from "../reducers/loginReducer"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
      const initialUser = JSON.parse(sessionStorage.getItem('currentUser')) || {
        isAuth: false,
        user: undefined
    }

    const [currentUser, dispatch] = useReducer(loginReducer, initialUser)
    const navigate = useNavigate()

    useEffect(() => {
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
        console.log(`current user useAuth - ${JSON.stringify(currentUser)}`)
    }, [currentUser])

    const handleLogIn = ({ username, password }) => {
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
        navigate('users')
    }

    const handleLogOut = () => {
        dispatch({
            type:'logout'
        })
        sessionStorage.removeItem('currentUser')
        navigate('login')
    }
  return[
    currentUser,
    handleLogIn,
    handleLogOut
  ]
}
