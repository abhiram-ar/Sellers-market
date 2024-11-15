import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemPageBody from "./Components/ItemDetails/ItemPageBody.jsx";
import Body from "./Components/Home/Body.jsx";
import SellerPage from "./Components/seller/SellerPage.jsx";
import { FirebaseProvider } from "./context/firebase.jsx";
import { Redirect } from "./Components/Redirect.jsx";
import SupabaseContext from "./context/Supabase.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Redirect />,
    },
    {
        path: "/home",
        element: <App />,
        children: [
            {
                path: "/home/",
                element: <Body />,
            },
            {
                path: "/home/item/:id?",
                element: <ItemPageBody />,
            },
        ],
    },
    {
        path: "/home/post",
        element: <SellerPage />,
    },
    {
        path: "/test",
        element: <SupabaseContext />,
    },
]);

createRoot(document.getElementById("root")).render(
    <FirebaseProvider>
        <RouterProvider router={appRouter} />
    </FirebaseProvider>
);
