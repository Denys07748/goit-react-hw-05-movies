import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Header, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Movies">Movies</Link>
                </nav>
            </Header>
            <main>
                <Outlet />
            </main>
            <ToastContainer autoClose={3000} theme="colored"/>
        </Container>
    );
};