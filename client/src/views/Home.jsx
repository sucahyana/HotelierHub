import React, {useState, useRef} from "react";
import ToastAtom from './../components/Atoms/Toast';
import {login} from "../services/AuthService";
import {SiFacebook, SiGnuprivacyguard} from "react-icons/si";
import {RxGithubLogo} from "react-icons/rx";
import NuansaLogo from "../assets/Nuansa-Logo.png"
import NuansaArt from "../assets/HotelViews.jpg"
import Stay from "../assets/Stay-Relax-Repeat.png"
import { Image } from 'primereact/image';
import {IconButton, LinkButton} from "../components/Atoms/ButtonPrime";
import GithubLogo from "../assets/github-mark-white.png"
import {FcGoogle} from "react-icons/fc";
import {ImGithub} from "react-icons/im";
import {InputLarge} from "../components/Atoms/InputPrime";

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
        <div className="min-h-screen bg-gray-50 text-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-20 bg-gray-400 shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <img
                            src={NuansaLogo}
                            className="w-40 mx-auto"
                            alt="Nuansa Logo"
                        />
                    </div>
                    <div className="mt-10 flex flex-col items-center">
                        <h1 className="text-2xl text-white xl:text-3xl font-extrabold text-shadow-sm text-shadow-ui-500/10">
                            Sign In Into Your Account
                        </h1>
                        <form className="mx-auto mt-8 shadow-xl bg-opacity-20 bg-white rounded-lg p-4" onSubmit={handleSubmit} >
                            <ToastAtom ref={toast}/>

                            <InputLarge
                                className="w-full px-8 py-4 "
                                type="text"
                                placeholder="username"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <InputLarge
                                className="w-full px-8 py-4 mt-5"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <div
                                className=" px-2 text-base text-white  font-normal my-2"
                            >
                                <LinkButton label={'Forgot Password?'} className={'text-ui-600'}/>
                            </div>
                            <button
                                className="mt-5 tracking-wide font-semibold bg-ui-500 text-gray-100 w-full py-4 rounded-lg hover:bg-ui-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                type='submit'>
                                <SiGnuprivacyguard size={24} />
                                <span className="ml-3">Sign Up</span>
                            </button>
                            <p className="mt-6 text-xs text-white text-center">
                                I agree to abide by templatana's
                                <a href="#" className="text-ui-400">
                                    &nbsp; Terms of Service &nbsp;
                                </a>
                                and its &nbsp;
                                <a href="#" className="text-ui-400">
                                    Privacy Policy
                                </a>
                            </p>
                        </form>
                        <div className="w-full mx-auto flex-1 mt-6">
                            <div className={'flex flex-col items-center'}>
                                <IconButton
                                    icon={<FcGoogle size={32}/>}
                                    label="Google"
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg px-24 p-3 bg-ui-100 text-gray-800 flex items-center justify-center hover:bg-ui-300 transition-all duration-300 ease-in-out  focus:shadow-outline focus:outline-non"
                                />
                                <IconButton
                                    icon={<ImGithub  size={32}/>}
                                    label="GitHub"

                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg px-24 py-3 bg-ui-100 text-gray-800 flex items-center justify-center mt-4 hover:bg-ui-300 transition-all duration-300 ease-in-out  focus:shadow-outline focus:outline-non"
                                />
                            </div>
                        </div>

                        <div className="mt-3 text-center">
                            <div
                                className="text-base text-white  font-medium my-2"
                            >
                                Don't have an account? <LinkButton label={'Register'} className={'text-ui-600'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex-1 bg-indigo-100 text-center rounded-br-xl rounded-tr-xl hidden lg:flex shadow-inner-[20px]">
                    <div
                        className="w-full h-full bg-cover rounded-br-xl rounded-tr-xl opacity-80"
                        style={{ backgroundImage: `url(${NuansaArt})` }}
                    >
                    </div>
                    <Image
                        src={Stay}
                        alt="Nuansa Art Banner"
                        className="absolute top-1/2 left-1/2 w-auto h-auto opacity-100 transform -translate-x-1/2 -translate-y-1/2 rounded-br-xl rounded-tr-xl animate-wiggle animate-infinite hover:animate-wiggle-more hover:animate-infinite"
                    />
                </div>


            </div>

        </div>
    );
};

export default Home;
