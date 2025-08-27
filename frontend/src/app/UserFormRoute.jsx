import { useContext, useEffect, useState } from "react"
import { UserForm } from "./components/UserForm"
import { UserContext } from "./context/UserContext"
import { useParams } from "react-router-dom"


export const UserFormRoute = () => {
    const {users, emptyForm} = useContext(UserContext)
    const [userSelected, setUserSelected] = useState(emptyForm)

    const {id} = useParams()

    useEffect(()=>{
        console.log(`parámetro id - ${id}`)
        const userFinded = users.find(user => user.id == id) || emptyForm
        setUserSelected(userFinded)
    },[id])

    return (
        <div className="mt-16">
            <div className="text-3xl">Ruta registro</div>
            <UserForm selectedUser={userSelected}/>
        </div>
    )
}
