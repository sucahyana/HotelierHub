import React from "react";

import { ButtonLink } from "../Atoms/ButtonPrime";
import NuansaLogo from "../../assets/Nuansa-Logo.png";
import LoginForm from "../Molecules/LoginForm";
import SocialAuthButtons from "../Molecules/SocialAuthButtons";
import {useSpring,animated} from "@react-spring/web";

const SignInCard = () => {
    const slideInAnimation = useSpring({
        from: { transform: "translateX(100%)" },
        to: { transform: "translateX(0)" },
    });

    return (
        <animated.div style={slideInAnimation} className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
                <img src={NuansaLogo} className="w-40 mx-auto" alt="Nuansa Logo" />
            </div>
            <div className="mt-10 flex flex-col items-center">
                <h1 className="text-2xl text-white xl:text-3xl font-extrabold text-shadow-sm text-shadow-ui-500/10">
                    Sign In
                </h1>
                <LoginForm />
                <SocialAuthButtons />
                <div
                    className=" px-2 text-base text-white  font-normal my-2"
                >
                    <ButtonLink label={'Forgot Password?'} className={'text-ui-600'}/>
                </div>
                <div className="mt-3 text-center">
                    <div className="text-base text-white font-medium my-2">
                        Don't have an account?{" "}
                        <ButtonLink label={"Register"} link={'/register'}  className={"text-ui-600"} />
                    </div>
                </div>
            </div>
        </animated.div>
    );
};

export default SignInCard;
