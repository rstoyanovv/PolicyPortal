import { Routes, Route } from "react-router-dom";
import InformativeLoginScreen from "../screens/LoginAndRegistration/InformativeLoginScreen";
import RegistrationScreen from "../screens/LoginAndRegistration/RegistationScreen";

export default function LoginAndRegistrationInnerRouter() {
    return (
        <Routes>
            <Route path="/" element={<InformativeLoginScreen />} />
            <Route path="/register" element={<RegistrationScreen />} />
        </Routes>
    );
}