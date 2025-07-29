import { useState } from "react";

const emptyForm = {
    username: '',
    password:'',
    email: ''
}

export const UserForm = () => {

    const [formData, setFormData] = useState(emptyForm);

    const {username, password, email} = formData;

    const handleChange = ({target}) => {
        const {name, value} = target;
        console.log(`${name} - ${value}`)
        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!username || !password || !email){
            alert('Debes rellenar todos los campos')
        }else{
            setFormData(emptyForm);
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
                <div className="font-semibold">Password:</div>
                <input className="border border-gray-400 outline-none px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  rounded"
                    placeholder="Introduce la contraseña..."
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange} />
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

            <div className="mt-4">
                <button type="submit" className="p-1 bg-blue-600 rounded text-white hover:bg-blue-700 hover:shadow-lg">
                    Enviar
                </button>
            </div>

        </form>
    </>)
}