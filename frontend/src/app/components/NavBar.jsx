export const NavBar = ({ currentUser }) => {
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h1 className="font-bold text-center mt-5 mb-5 text-[30px] "> Panel de Administración</h1>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <div className="text-end">{currentUser.username}
                        
                    </div>
                    <div className="w-100 mx-auto text-center text-end">
                            <button type="button" className="p-2 font-bold bg-blue-600 rounded text-white hover:bg-blue-700 hover:shadow-lg"
                            >
                                Logout
                            </button>
                        </div>

                </div>
            </div>
        </nav>
    )
}