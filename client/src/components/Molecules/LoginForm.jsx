import ToastAtom from "../Atoms/Toast";
import {InputLarge} from "../Atoms/InputPrime";
import {ButtonIcon, ButtonLink} from "../Atoms/ButtonPrime";
import {SiGnuprivacyguard} from "react-icons/si";
import React, {useRef, useState} from "react";
import {login} from "../../services/AuthService";


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const toast = useRef(null);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await login(username, password);
            setError(null);
            toast.current.showSuccess('Success', 'Anda berhasil masuk');
            console.log('Response:', response);
            setLoading(false);
        } catch (error) {
            setError("Username atau password salah");
            console.error('Error:', error);
            toast.current.showError('Error', 'Username atau password salah');
            setLoading(false);
        }

    };
    return (
        <form className="mx-auto mt-8 shadow-xl bg-opacity-20 bg-white rounded-lg p-4"
              onSubmit={handleSubmit}>
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
                <ButtonLink label={'Forgot Password?'} className={'text-ui-600'}/>
            </div>
            <ButtonIcon
                className="mt-5 tracking-wide font-semibold bg-ui-500 text-gray-100 w-full py-4 rounded-lg hover:bg-ui-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                type='submit'
                icon={<SiGnuprivacyguard size={24}/>}
                loading={loading}
            >

                <span className="ml-3">Sign Up</span>
            </ButtonIcon>
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
    )
}

export default LoginForm;