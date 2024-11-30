import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout, Album } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h1>Something went wrong</h1>,
        children: [
            {
                index: true,
                element: <h1>Home</h1>,
            },
            {
                path: "register",
                element: <h1>Register</h1>,
            },
            {
                path: "login",
                element: <h1>Register</h1>,
            },
            {
                path: "user",
                element: <h1>User account</h1>,
            },
            {
                path: "album",
                element: <Album />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
