import { Routes, Route } from "react-router-dom";
import InformativeLoginScreen from "../screens/LoginAndRegistration/InformativeLoginScreen";

export default function LoginAndRegistrationInnerRouter() {
    return (
        <Routes>
            <Route path="/" element={<InformativeLoginScreen />} />
        </Routes>
    );
}