import { useEffect, useState } from "react"
import { UserForm } from "./components/UserForm"
import { useNavigate, useParams } from "react-router-dom"


export const UserFormRoute = ({ handleAddUsers, emptyFormData, users  }) => {
    const [userSelected, setUserSelected] = useState(emptyFormData)
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        //const userFinded = (users.find(user => user.id == id) || emptyFormData)
        //setUserSelected(userFinded)
        console.log(id)
    },[id])

    const onUserAdded = (user) =>{
        handleAddUsers(user);
        navigate("/users")
    }
    return (
        <div className="mt-16">
            <div className="text-3xl">Ruta registro</div>
            <UserForm handleAddUsers={onUserAdded} emptyFormData={emptyFormData} selectedUser={userSelected}/>
        </div>
    )
}
