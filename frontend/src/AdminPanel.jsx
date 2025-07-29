import { UserForm } from "./components/UserForm"
import { UsersTable } from "./components/UsersTable"


export const AdminPanel = () => {
    const user = [{
        id:1,
        username: 'prueba',
        email:'prueba@correo.es'
    }]
    return (<>
        <h1 className="w-100 py-16 mx-auto text-3xl font-bold">Panel de Administración</h1>
        <div className="grid grid-cols-2 gap-4">
            <UserForm/>
            <UsersTable users={user}/>
        </div>
    </>
    )
}
