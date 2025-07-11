import { RouteObject } from "react-router-dom"
import Layout from "@/pages/layout/Layout"
import Home from "@/pages/home/Home"
import ProtectedRoute from "@/component/common/ProtectedRoutes"
import Dashboard from "@/pages/home/Dashboard"
import Registration from "@/component/profile/LoginUser"
import RegisterUser from "@/component/profile/RegisterUser"


export const appRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "dashboard",
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        children: [
            { path: "login", element: <Registration /> },
            { path: "register", element: <RegisterUser /> },
        ],
    },
]
