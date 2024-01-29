import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <p className="text-md text-slate-500 font-medium">Dont have an account? <Link to="/register">Register</Link></p>
        </AuthLayout>
    )
}

export default LoginPage;