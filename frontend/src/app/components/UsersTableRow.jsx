import { NavLink } from "react-router-dom"


export const UsersTableRow = ({ id, username, email, handleDeleteUsers, handleUpdateUsers }) => {
    return (
        <>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="border-r border-gray-200 py-1 px-6">{id}</td>
                <td className="border-r border-gray-200 py-1 px-6">{username}</td>
                <td className="border-r border-gray-200 py-1 px-6">{email}</td>
                <td className="border-r border-gray-200 py-1 px-6">
                    <button className="p-2 font-bold bg-blue-600 rounded text-white hover:bg-blue-700 hover:shadow-lg"
                        onClick={() => handleUpdateUsers(
                            {
                                id,
                                username,
                                email,
                            }
                        )}>
                        Actualizar
                    </button>
                </td>
                <td className="border-r border-gray-200 py-1 px-6">
                    <NavLink className="p-2 font-bold bg-blue-600 rounded text-white hover:bg-blue-700 hover:shadow-lg"
                    to={"/users/updade/"+id}>
                        {console.log(`actualizando - ${id}`)}
                        Ruta actualizar
                    </NavLink>
                </td>
                <td className="py-2 px-6">
                    <button className="p-2 font-bold bg-red-600 rounded text-white hover:bg-red-700 hover:shadow-lg"
                        onClick={() => handleDeleteUsers(id)}>
                        Eliminar
                    </button>
                </td>
            </tr>
        </>
    )
}
