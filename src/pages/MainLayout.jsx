import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="page-content wrapper">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
