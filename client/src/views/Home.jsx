import React, {useState, useRef} from "react";
import ToastAtom from './../components/Atoms/Toast';
import {login} from "../services/AuthService";
import {SiFacebook, SiGnuprivacyguard} from "react-icons/si";
import {RxGithubLogo} from "react-icons/rx";

const Home = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const toast = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await login(username, password);
            setError(null);
            toast.current.showSuccess('Success', 'Anda berhasil masuk');
            console.log('Response:', response);
        } catch (error) {
            setError("Username atau password salah");
            console.error('Error:', error);
            toast.current.showError('Error', 'Username atau password salah');
        }

    };


    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img
                            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                            className="w-32 mx-auto"
                        />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Sign up for templatana
                        </h1>
                        <div className="w-full mx-auto flex-1 mt-8">
                            <div className={'flex flex-col items-center'}>
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-ui-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white rounded-full">
                                        <SiFacebook size={32} className={'text-ui-600'}/>
                                    </div>
                                    <span className="ml-4">Sign Up with Google</span>
                                </button>

                                {/* GitHub Sign Up Button */}
                                <button
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-ui-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                    <div className="bg-white rounded-full">
                                        <RxGithubLogo size={32} className={'text-ui-600'}/>
                                    </div>
                                    <span className="ml-4">Sign Up with GitHub</span>
                                </button>
                            </div>
                        </div>

                        <div className="my-12 border-b text-center">
                            <div
                                className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                            >
                                Or sign up with e-mail
                            </div>
                        </div>

                        <form className="mx-auto max-w-xs" onSubmit={handleSubmit}>
                            <ToastAtom ref={toast}/>

                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="text"
                                placeholder="username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />


                            {/* Sign Up Button */}
                            <button
                                className="mt-5 tracking-wide font-semibold bg-ui-500 text-gray-100 w-full py-4 rounded-lg hover:bg-ui-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                type='submit'


                            >
                                <SiGnuprivacyguard size={24} />
                                <span className="ml-3">Sign Up</span>
                            </button>
                            {/* Terms of Service and Privacy Policy */}
                            <p className="mt-6 text-xs text-gray-600 text-center">
                                I agree to abide by templatana's
                                <a href="#" className="border-b text-ui-500 border-dotted">
                                    &nbsp; Terms of Service &nbsp;
                                </a>
                                and its &nbsp;
                                <a href="#" className="border-b text-ui-500 border-dotted">
                                    Privacy Policy
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')`,
                        }}
                    ></div>
                </div>
            </div>

        </div>
    );
};

export default Home;
