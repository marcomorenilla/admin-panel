import {  useState } from "react"


export const LoginPage = ({ handleLogIn }) => {

    const initialFormData = {
        username: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialFormData)
    const { username, password } = formData

    const onLogin = (formData) => {
        handleLogIn(formData)
        setFormData(initialFormData)
    }



    const handleChange = ({ target }) => {
        const { name, value } = target

        setFormData({
            ...formData,
            [name]: value
        })

    }




    return (<>
        <div className="w-full mx-auto text-center mt-16">
            <div className="font-bold border-b border-gray-300 pb-5 text-6xl">
                Login
            </div>
            <div className="w-75 mt-20 mx-auto">
                <form className="mb-2">
                    <div className="flex flex-col gap-2 mb-4">
                        <div className="font-semibold text-2xl">Username:</div>
                        <input className="border border-gray-400 outline-none px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
                            placeholder="Introduce el nombre de usuario.."
                            name="username"
                            value={username}
                            onChange={handleChange} />
                    </div>

                    <div className="flex flex-col gap-2 mb-4">
                        <div className="font-semibold text-2xl">Password:</div>
                        <input className="border border-gray-400 outline-none px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded"
                            placeholder="Introduce la contraseña..."
                            name="password"
                            type="password"
                            value={password}
                            onChange={handleChange} />
                    </div>
                </form>
            </div>
            <div className="mt-12 w-100 mx-auto text-center">
                <button type="button" className="p-2 font-bold bg-blue-600 rounded text-white hover:bg-blue-700 hover:shadow-lg"
                    onClick={() => onLogin(formData)}>
                    Login
                </button>
            </div>
        </div>
    </>)
}