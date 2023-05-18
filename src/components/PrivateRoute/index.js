import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const isAuth = localStorage.getItem('accessToken');

    return isAuth ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoutes;
