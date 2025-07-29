import { UsersTableRow } from "./UsersTableRow"

export const UsersTable = ({ users = [] }) => {
    return (
        <>
            <table className="h-12 w-100 shadow-md rounded-lg ml-4 mr-4 overflow-hidden text-center">
                <thead className="bg-green-700 text-white">
                    <tr>
                        <th className="border-r border-white-200 py-1 px-6 font-bold uppercase">#</th>
                        <th className="border-r border-white-200 py-1 px-6 font-bold uppercase">username</th>
                        <th className="border-r border-white-200 py-1 px-6 font-bold uppercase">mail</th>
                        <th className="border-r border-white-200 py-1 px-6 font-bold uppercase">actualizar</th>
                        <th className="py-1 px-6  font-bold uppercase">eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(({ id, username, email }) => (
                            <UsersTableRow key={id} id={id} username={username} email={email}/>
                        ))
                    }
                </tbody>

            </table>
        </>
    )
}
