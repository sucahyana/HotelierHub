import React from "react";
import HeroAuthSection from "../../components/Organisms/HeroAuthSection";
import RegisterCard from "../../components/Organisms/RegisterCard";


const Register = () => {

    return (
            <div className="min-h-screen bg-gray-50 text-gray-900 flex justify-center">
                <div
                    className="max-w-screen-xl m-0 sm:m-10 bg-gray-400 shadow sm:rounded-lg flex justify-center flex-1">
                    <HeroAuthSection direction="right" />
                    <RegisterCard/>
                </div>
            </div>
    );
};

export default Register;
