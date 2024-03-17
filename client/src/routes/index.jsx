// src/Routes/routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/auth/Login';
import Register from '../Pages/auth/Register';
import Home from "../Pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;
