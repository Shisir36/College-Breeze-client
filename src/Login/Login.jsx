import { useContext, useRef, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Components/Provider/AuthProvider';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const { signIn, signInWithGoogle, signInWithGithub, resetPassword } = useContext(Authcontext)
    const [error, setError] = useState(null);
    const emailRef = useRef();
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => setError("Invalid email or password"))
    };

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleSignInWithGithub = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleForgotPasswordSubmit = () => {
        const email = emailRef.current.value
        console.log(email);
        if (!email) {
            alert("please enter your email to reset your password")
        }
        resetPassword(email)
            .then(() => {
                alert("please check your email")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };


    return (
        <div className="min-h-screen py-12 sm:px-6 lg:px-8  px-3 gap-3 items-center">

            <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold ">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-md ">
                        Or{" "}
                        <Link to="/signup" className=" font-medium">
                            create a new account
                        </Link>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-sm">
                    <div className=" rounded-sm  bg-orange-300  py-12 px-4 sm:px-6 lg:px-8">
                        {error && <div className="text-red-500 mb-4">{error}</div>}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        ref={emailRef}
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember_me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className=' flex justify-between'>
                                <button
                                    type="submit"
                                    className=" flex justify-center py-3 px-7 border border-transparent bg-indigo-600 rounded-md shadow-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                >
                                    Sign in
                                </button>
                                <div>
                                    <Link onClick={handleForgotPasswordSubmit}>Forget Password?</Link>
                                </div>
                            </div>
                            <h2 className='text-center mt-5'>Sign in With</h2>
                        </form>
                        <div>
                            <button onClick={handleSignInWithGoogle} className='bg-red-500 btn border-none flex hover:bg-red-600 items-center py-3 gap-2 mx-auto mt-3 w-full'>
                                <FaGoogle></FaGoogle><span>Sign in with Google</span>
                            </button>
                            <button onClick={handleSignInWithGithub} className=' btn border-none py-3 flex items-center gap-2 mx-auto mt-3 w-full'>
                                <FaGithub></FaGithub><span>Sign in with Github</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;