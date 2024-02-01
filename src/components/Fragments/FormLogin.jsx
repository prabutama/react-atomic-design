import { useState } from "react";
import { login } from "../../services/auth.service";
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    const [failedLogin, setFailedLogin] = useState('');
    const handleLogin = (event) => {
        event.preventDefault();
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        login(data, (status, res) => {
            if (status) {
                localStorage.setItem("token", res);
                window.location.href = '/products';
            } else {
                setFailedLogin(res.response.data);
                console.log(res.response.data);
            }
        })   
    }
    return (
        <form onSubmit={handleLogin}>
            {
                failedLogin.length > 0 && (<div className="text-red-800 rounded-md font-medium">{failedLogin}</div>)
            }
            <div className="mb-6">
                <InputForm
                    label="Username"
                    type="text"
                    placeholder="input your username"
                    name="username" />
                <InputForm
                    label="Password"
                    type="password"
                    placeholder="*****"
                    name="password" />
                <Button
                    style='bg-green-500'
                    type="submit"
                    text="Login" />
            </div>
        </form>
    )
}

export default FormLogin;