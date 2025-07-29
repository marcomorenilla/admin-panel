

export const UsersTableRow = ({ id, username, email }) => {
    return (
        <>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="border-r border-gray-200 py-1 px-6">{id}</td>
                <td className="border-r border-gray-200 py-1 px-6">{username}</td>
                <td className="border-r border-gray-200 py-1 px-6">{email}</td>
                <td className="border-r border-gray-200 py-1 px-6">
                    <button className="p-1 bg-blue-600 rounded text-white hover:bg-blue-700 hover:shadow-lg">
                        Actualizar
                    </button>
                </td>
                <td className="py-1 px-6">
                    <button className="p-1 bg-red-600 rounded text-white hover:bg-red-700 hover:shadow-lg">
                        Eliminar
                    </button>
                </td>
            </tr>
        </>
    )
}
