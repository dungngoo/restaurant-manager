import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import React, { Fragment, useState } from 'react';
import PrivateRoutes from './components/PrivateRoute';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isAuthenticated = localStorage.getItem('accessToken');
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    console.log(isAuthenticated);
    function HomePage() {
        const navigate = useNavigate();

        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={() => navigate('/about')}>Go to About page</button>
            </div>
        );
    }
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                to={route.to}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    <Route element={<PrivateRoutes />}>
                        {privateRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    to={route.to}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
