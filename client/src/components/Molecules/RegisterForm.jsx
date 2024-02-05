import React, {useRef, useState} from "react";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import { AutoComplete } from "primereact/autocomplete";
import { Toast } from "primereact/toast";
import { SiGnuprivacyguard } from "react-icons/si";
import { register } from "../../services/AuthService";
import {ButtonIcon, ButtonLink} from "../Atoms/ButtonPrime";
import {InputLarge} from "../Atoms/InputPrime";
import ToastAtom from "../Atoms/Toast";

const RegisterForm = () => {
    const toast = useRef(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values, { setSubmitting }) => {
        setLoading(true);
        setSubmitting(true);
        try {
            const response = await register(
                values.name,
                values.username,
                values.email,
                values.password,
                values.confirmPassword
            );
            if (toast.current) {
                toast.current.showSuccess("Success", "Anda daftar");
            }
            console.log("Response:", response);
        } catch (error) {
            if (toast.current) {
                toast.current.showError("Error", "tidak tahu");
            }
            console.error("Error:", error);
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = "Name is required";
            }

            if (!values.username) {
                errors.username = "Username is required";
            }

            if (!values.email) {
                errors.email = "Email is required";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                errors.email = "Invalid email format";
            }

            if (!values.password) {
                errors.password = "Password is required";
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = "Confirm Password is required";
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = "Passwords must match";
            }

            return errors;
        },
        onSubmit: handleSubmit,
    });

    return (
        <form
            className="mx-auto mt-8 shadow-xl bg-opacity-20 bg-white rounded-lg p-4 flex flex-col gap-5"
            onSubmit={formik.handleSubmit}
        >
            <ToastAtom ref={toast} />

            <InputLarge
                inputId="name"
                name="name"
                placeholder="name"
                value={formik.values.name}
                suggestions={[]}
                className={`${formik.errors.name ? "p-invalid" : ""} w-full px-6 py-3`}
                onChange={(e) => {
                    formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && (
                <small className="font-medium p-error -mt-5 -mb-3">{formik.errors.name}</small>
            )}

            <InputLarge
                inputId="username"
                name="username"
                placeholder="username"
                value={formik.values.username}
                suggestions={[]}
                className={`${formik.errors.name ? "p-invalid" : ""} w-full px-6 py-3`}
                onChange={(e) => {
                    formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
            />
            {formik.errors.username && (
                <small className="font-medium p-error -mt-5 -mb-3">{formik.errors.username}</small>
            )}

            <InputLarge
                inputId="email"
                name="email"
                placeholder="email"
                value={formik.values.email}
                suggestions={[]}
                className={`${formik.errors.name ? "p-invalid" : ""} w-full px-6 py-3`}
                onChange={(e) => {
                    formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && (
                <small className="font-medium p-error -mt-5 -mb-3">{formik.errors.email}</small>
            )}

            <InputLarge
                inputId="password"
                name="password"
                placeholder="Password"
                type="password"
                value={formik.values.password}
                suggestions={[]}
                className={`${formik.errors.name ? "p-invalid" : ""} w-full px-6 py-3`}
                onChange={(e) => {
                    formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
            />
            {formik.errors.password && (
                <small className="font-medium p-error -mt-5 -mb-3">{formik.errors.password}</small>
            )}

            <InputLarge
                inputId="confirmPassword"
                name="confirmPassword"
                placeholder="confirm Password"
                type="password"
                value={formik.values.confirmPassword}
                suggestions={[]}
                className={`${formik.errors.name ? "p-invalid" : ""} w-full px-6 py-3`}
                onChange={(e) => {
                    formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
            />
            {formik.errors.confirmPassword && (
                <small className="font-medium p-error -mt-5 -mb-3">{formik.errors.confirmPassword}</small>
            )}

            <div className="px-2 text-base text-white  font-normal">
                <ButtonLink label={"Forgot Password?"} className={"text-ui-600"} />
            </div>

            <ButtonIcon
                className="mt-5 tracking-wide font-semibold bg-ui-500 text-gray-100 w-full py-4 rounded-lg hover:bg-ui-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                type='submit'
                icon={<SiGnuprivacyguard size={24}/>}
                loading={loading}
                disabled={formik.isSubmitting}
            >

                <span className="ml-3">Sign Up</span>
            </ButtonIcon>

            <p className="mt-6 text-xs text-white text-center">
                I agree to abide by HotelierHub
                <a href="#" className="text-ui-400">
                    &nbsp; Terms of Service &nbsp;
                </a>
                and its &nbsp;
                <a href="#" className="text-ui-400">
                    Privacy Policy
                </a>
            </p>
        </form>
    );
};

export default RegisterForm;
