import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Movies">Movies</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <ToastContainer autoClose={3000} theme="colored"/>
        </div>
    );
};