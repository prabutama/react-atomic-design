import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
        <form>
            <div className="mb-6">
                <InputForm
                    label="Name"
                    type="text"
                    placeholder="Input full name"
                    name="name" />
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
                <InputForm
                    label="Confirm Password"
                    type="password"
                    placeholder="*****"
                    name="confirm-password" />
                <Button
                    style='bg-green-500'
                    type="submit"
                    text="Register" />
            </div>
        </form>
    )
}

export default FormRegister;