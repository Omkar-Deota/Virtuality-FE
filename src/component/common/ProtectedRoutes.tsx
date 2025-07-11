import { Navigate } from "react-router-dom"
import { useUserContext } from "@/context/UserProvider"

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUserContext()
    return user ? children : <Navigate to="/login" replace />
}

export default ProtectedRoute
