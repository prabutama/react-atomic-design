import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href='/products';
    }
    return (
        <form onSubmit={handleLogin}>
            <div className="mb-6">
                <InputForm
                    label="Email"
                    type="email"
                    placeholder="example@mail"
                    name="email" />
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