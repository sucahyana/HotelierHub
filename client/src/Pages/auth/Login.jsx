import React from "react";

import SignInCard from "../../components/Organisms/SignInCard";
import HeroAuthSection from "../../components/Organisms/HeroAuthSection";

const Login = () => {


    return (

            <div className="min-h-screen bg-gray-50 text-gray-900 flex justify-center">
                <div
                    className="max-w-screen-xl m-0 sm:m-20 bg-gray-400 shadow sm:rounded-lg flex justify-center flex-1">
                    <SignInCard/>
                    <HeroAuthSection direction="left" />
                </div>

            </div>

    );
};

export default Login;
