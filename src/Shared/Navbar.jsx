import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../Components/Provider/AuthProvider";
import { FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import wbLogo from "../assets/wb-logo/logo-middle.png"

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };
    const { currentUser, logout } = useContext(Authcontext)
    const handleLogout = () => {
        logout()
    }
    return (
        <nav className="w-full">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between " >
                <NavLink to="/" className=" flex items-center gap-0">
                    <img src={wbLogo} alt="" className="md:h-12 md:w-12 h-9 w-9" />
                    <h1 className='titles font-extrabold md:text-4xl text-3xl'>College<span className=' text-orange-400'> Breeze</span></h1>
                </NavLink>
                {/* Mobile Nav */}
                <div className="md:hidden">
                    <button
                        onClick={handleNavToggle}
                        type="button"
                        className="focus:outline-none"
                    >
                        <div className="md:hidden">
                            <button
                                onClick={handleNavToggle}
                                type="button"
                                className="focus:outline-none"
                            >
                                {isNavOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center justify-between space-x-5 mx-auto">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-800 font-semibold text-[23px] '
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/admission"
                        className={({ isActive }) =>
                            isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-800 font-semibold text-[23px] '
                        }
                    >
                        Admission
                    </NavLink>
                    <NavLink
                        to="/mycollege"
                        className={({ isActive }) =>
                            isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-800 font-semibold text-[23px] '
                        }
                    >
                        My College
                    </NavLink>

                </div>
                <div className="hidden md:flex items-center ml-auto">
                    <div>
                        {currentUser ? <img
                            src={currentUser ? currentUser.photoURL : ""}
                            className="h-12 w-12 rounded-full ml-2"
                            title={currentUser?.displayName}
                        />
                            : ""

                        }

                    </div>
                    <div className="ml-5">
                        {currentUser ? (
                            <button className="bg-red-600 font-extrabold text-white rounded-md py-2 px-2 mr-3" onClick={handleLogout}>
                                <FaSignOutAlt></FaSignOutAlt>
                            </button>
                        ) : (
                            <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-800 font-semibold text-[23px] '
                                }
                            >
                                <FaUserPlus className=' text-3xl mr-7' />
                            </NavLink>
                        )}
                    </div>
                </div>

            </div>

            {/* Mobile Nav Dropdown */}
            {isNavOpen && (
                <div className="md:hidden h-full mx-auto flex flex-col items-center mt-10 "> {/* Added 'flex' and 'items-center' */}
                    <div className="mx-auto text-center">
                        <div className='ml-6 mb-5'>
                            {currentUser ? <img
                                src={currentUser ? currentUser.photoURL : ""}
                                className="h-12 w-12 rounded-full ml-2"
                                title={currentUser?.displayName}
                            />
                                : ""

                            }

                        </div>
                        <div>
                            <div className=' mb-3'>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-600 font-semibold md:text-[23px] text-[19px]'
                                    }
                                >
                                    Home
                                </NavLink>
                            </div>
                            <div className=' mb-3'>
                                <NavLink
                                    to="/Admission"
                                    className={({ isActive }) =>
                                        isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-600 font-semibold md:text-[23px] text-[19px]'
                                    }
                                >
                                  Admission
                                </NavLink>
                            </div>
                            <div className=' mb-3'>
                                <NavLink
                                    to="/mycollege"
                                    className={({ isActive }) =>
                                        isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px] ' : 'text-gray-600 font-semibold md:text-[23px] text-[19px]'
                                    }
                                >
                                    My College
                                </NavLink>
                            </div>
                            <div className="ml-8">
                                {currentUser ? (
                                    <button className="bg-red-600 font-extrabold text-white rounded-md py-2 px-2 mr-3" onClick={handleLogout}>
                                        <FaSignOutAlt></FaSignOutAlt>
                                    </button>
                                ) : (
                                    <NavLink
                                        to="/signup"
                                        className={({ isActive }) =>
                                            isActive ? 'text-orange-400 font-extrabold md:text-[23px] text-[19px]' : 'text-gray-800 font-semibold text-[23px] '
                                        }
                                    >
                                        <FaUserPlus className=' text-3xl mr-7' />
                                    </NavLink>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;