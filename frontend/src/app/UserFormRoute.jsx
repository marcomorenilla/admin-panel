import { UserForm } from "./components/UserForm"


export const UserFormRoute = ({handleAddUsers,emptyFormData  }) => {
    return (
        <div>
            <div className="text-3xl">Ruta registro</div>
            <UserForm handleAddUsers={handleAddUsers} emptyFormData={emptyFormData} />
        </div>
    )
}
