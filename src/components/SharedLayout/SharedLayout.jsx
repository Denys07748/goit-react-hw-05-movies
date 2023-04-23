import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Header, Link } from "./SharedLayout.styled";
import { Suspense } from "react";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <ToastContainer autoClose={3000} theme="colored"/>
        </Container>
    );
};