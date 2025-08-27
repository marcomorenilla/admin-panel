import { useContext } from "react";
import { UserFormDialog } from "./components/UserFormDialog";
import { UsersTable } from "./components/UsersTable"
import { UserContext } from "./context/UserContext";




export const AdminPanel = () => {

    const { users, handleDialog } = useContext(UserContext)

    return (<>


        <div className="w-full mx-auto p-3 mt-40">
            <UserFormDialog handleDialog={handleDialog}/>
            <div className="mt-1 w-100 mx-auto text-center">
                <button type="button" className="p-2 font-bold bg-blue-600 rounded text-white hover:bg-blue-700 hover:shadow-lg"
                    onClick={() => handleDialog(true)}>
                    Añadir usuario
                </button>
            </div>
            {users.length > 0 ?
                <UsersTable /> :
                <div className="mt-8 w-100 mx-auto text-center">
                    <span className=" border border-yellow-500 bg-yellow-100 p-3 rounded font-bold text-yellow-500">No hay usuarios en el sistema!</span>
                </div>}
        </div>
    </>
    )
}
