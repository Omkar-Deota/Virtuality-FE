import Footer from "@/component/common/Footer"
import Navbar from "@/component/common/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout