
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;
