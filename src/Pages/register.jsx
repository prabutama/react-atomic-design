import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
    return(
        <AuthLayout title="Register">
            <FormRegister/>
            <p className="text-md text-slate-500 font-medium">Already have an account? <Link className="text-green-500" to="/login">Login</Link></p>
        </AuthLayout>
    )
}

export default RegisterPage;