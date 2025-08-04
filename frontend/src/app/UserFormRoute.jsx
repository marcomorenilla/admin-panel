import { useState } from "react"
import { UserForm } from "./components/UserForm"
import { useNavigate } from "react-router-dom"


export const UserFormRoute = ({ handleAddUsers, emptyFormData, handleUpdateUsers  }) => {
    const [userSelected, setUserSelected] = useState(emptyFormData)
    const navigate = useNavigate()



    const onUserAdded = (user) =>{
        handleAddUsers(user);
        navigate("/users")
    }
    return (
        <div className="mt-16">
            <div className="text-3xl">Ruta registro</div>
            <UserForm handleAddUsers={onUserAdded} emptyFormData={emptyFormData} selectedUser={userSelected} handleUpdateUsers={handleUpdateUsers}/>
        </div>
    )
}
