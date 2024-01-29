import { InputText } from "primereact/inputtext";

export const InputLarge = ({ classname, ...props }) => {
    return (
        <InputText className={`${classname} p-inputtext-lg rounded-[8px] text-lg rounded-sm text-ui-950`} {...props} />
    );
};

export const InputNormal = ({ classname, ...props }) => {
    return (
        <InputText className={`${classname} Normal rounded-[6px] text-lg rounded-sm text-ui-950`} {...props} />
    );
};

export const InputSmall = ({ classname, ...props }) => {
    return (
        <InputText className={`${classname} p-inputtext-sm rounded-[4px] text-lg rounded-sm text-ui-950`} {...props} />
    );
};



