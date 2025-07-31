import { useEffect, useState } from "react";


export const UserForm = ({ emptyFormData, handleAddUsers, selectedUser, handleDialog }) => {

    const [formData, setFormData] = useState(emptyFormData);

    useEffect(() => {
        setFormData({ ...selectedUser })
    }, [selectedUser])

    const { username, password, email } = formData;

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || (!password && formData.id === 0) || !email) {
            alert('Debes rellenar todos los campos')
        } else {
            handleAddUsers(formData);
            setFormData(emptyFormData);
        }

    }
    return (<>
        <form className="mt-8 mb-2 w-80 mx-auto sm:w-96"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col gap-2 mb-4">
                <div className="font-semibold">Username:</div>
                <input className="border border-gray-400 outline-none px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
                    placeholder="Introduce el nombre.."
                    name="username"
                    value={username}
                    onChange={handleChange} />
            </div>

            <div className="flex flex-col gap-2 mb-4">
                {formData.id > 0 || <>
                    <div className="font-semibold">Password:</div>
                    <input className="border border-gray-400 outline-none px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  rounded"
                        placeholder="Introduce la contraseña..."
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange} />
                </>

                }

            </div>

            <div className="flex flex-col gap-2 mb-4">
                <div className="font-semibold">Email:</div>
                <input className="border border-gray-400 outline-none px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  rounded"
                    placeholder="Introduce el email..."
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange} />
            </div>

            <div className="mt-10 text-center">
                <button type="submit" className="p-2 font-bold bg-blue-600 rounded text-white hover:bg-blue-700 hover:shadow-lg">
                    {formData.id > 0 ? 'Actualizar' : 'Enviar'}
                </button>
                {
                    !handleDialog ||
                    <button type="button" className="ml-4 border font-bold border-blue-600 text-blue-600 p-2 bg-white rounded  hover:text-white hover:bg-blue-700 hover:shadow-lg"
                        onClick={() => handleDialog(false)}>
                        Cerrar
                    </button>
                }

            </div>

        </form>
    </>)
}