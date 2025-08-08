import App from "@/App";
import About from "@/pages/About";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path: '/',
        // element: <App></App>
        Component: App,
        children: [
            {
                path: 'about',
                Component: About
            }
        ]
    }
])