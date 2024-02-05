import {ButtonIcon} from "../Atoms/ButtonPrime";
import {FcGoogle} from "react-icons/fc";
import {ImGithub} from "react-icons/im";
import React from "react";


const SocialAuthButtons = () => {


    return (
        <div className="w-full mx-auto flex-1 mt-6">
            <div className={'flex flex-col items-center'}>
                <ButtonIcon
                    icon={<FcGoogle size={32}/>}
                    label="Google"
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg px-24 p-3 bg-ui-100 text-gray-800 flex items-center justify-center hover:bg-ui-300 transition-all duration-300 ease-in-out  focus:shadow-outline focus:outline-non"
                />
                <ButtonIcon
                    icon={<ImGithub size={32}/>}
                    label="GitHub"

                    className="w-full max-w-xs font-bold shadow-sm rounded-lg px-24 py-3 bg-ui-100 text-gray-800 flex items-center justify-center mt-4 hover:bg-ui-300 transition-all duration-300 ease-in-out  focus:shadow-outline focus:outline-non"
                />
            </div>
        </div>
    )
}

export default SocialAuthButtons;