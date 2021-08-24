import { lazy, Suspense } from 'react';

const Loadable = (Component) => (props) =>
    (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Component {...props} />
        </Suspense>
    );

// pages
const Home = Loadable(lazy(() => import('./pages/Home')));
const Login = Loadable(lazy(() => import('./pages/authentication/Login')));
const Register = Loadable(lazy(() => import('./pages/authentication/Register')));

// routes
const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'register',
        element: <Register />,
    },
    {
        path: '*',
        element: <h1>Page Not Found!</h1>,
    },
];

export default routes;
