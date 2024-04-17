import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { UserAuth } from "../context/AuthContext";
import { HomeTemplate } from "../components/template/HomeTemplate";
import { LoginTemplate } from "../components/template/LoginTemplate";

export function MyRoutes() {
    console.log("Estoy en routes")
    const { user } = UserAuth()

    console.log(user)
    return (
        <Routes>
            <Route path="/login" element={<LoginTemplate />} />
            <Route 
            element={
                <ProtectedRoute 
                user={user} 
                redirectTo="/login"
                />}>
                     <Route path="/" element={<HomeTemplate />} />
            </Route>
        </Routes>
    )
}

