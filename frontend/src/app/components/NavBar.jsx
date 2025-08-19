import { NavLink } from "react-router-dom"

export const NavBar = ({ currentUser, handleLogOut }) => {

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h1 className="font-bold  mt-5 mb-5 text-[30px] "> AdminPanel</h1>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink className="hover:text-blue-500 aria-[current=page]:text-blue-400"
                                to="/users"
                                end
                            >Users</NavLink>
                        </li>
                         <li>
                            <NavLink className="hover:text-blue-500 aria-[current=page]:text-blue-400"
                                to="/users/register"
                            >Register</NavLink>
                        </li>
                    </ul>
                    <div className="ml-20 text-end">
                        <div className="flex gap-3 w-100 mx-auto text-center">
                            <div className="p-2">{currentUser.username}</div>
                            <button type="button" className="p-2 font-bold bg-blue-600 rounded text-white hover:bg-blue-700 hover:shadow-lg"
                                onClick={() => handleLogOut()}>
                                Logout
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    )
}