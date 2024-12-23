import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout, Home, Album, Artist, SignIn } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h1>Something went wrong</h1>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "signin",
                element: <SignIn />,
            },
            {
                path: "user",
                element: <h1>User account</h1>,
            },
            {
                path: "artist",
                element: <Artist />,
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
