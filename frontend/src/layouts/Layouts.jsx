import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../public/logo_fst.png';
function Layouts() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Met à jour le body avec la classe dark lorsque darkMode est vrai
        const app = document.querySelector("body");
        if (darkMode) {
            app.classList.add("dark");
        } else {
            app.classList.remove("dark");
        }
        // Enregistre la valeur de darkMode dans le localStorage
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]); // Exécute cette fonction à chaque changement de darkMode

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <header>
                <nav
                    className={`bg-${
                        darkMode ? "dark" : "white"
                    } border-gray-200 ${
                        darkMode ? "dark:bg-gray-900" : "dark:bg-white"
                    }`}
                >
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a
                            href="https://flowbite.com/"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src={logo}
                                className="h-14"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                RSI Student{" "}
                            </span>
                        </a>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                type="button"
                                onClick={toggleDarkMode}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                            >
                                {darkMode ? "Light Mode" : "Dark Mode"}
                            </button>
                            <button
                                data-collapse-toggle="navbar-cta"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-cta"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-cta"
                        >
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link
                                        to={"/"}
                                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                                        aria-current="page"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/login"}
                                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                                        aria-current="page"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/register"}
                                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                                        aria-current="page"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container">
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{" "}
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Flowbite™
                        </a>
                        . All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>        </>
    );
}

export default Layouts;
