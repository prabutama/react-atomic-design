import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
const AuthLayout = ({ children, title, type }) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    return (
        <div>
            <div className={isDarkMode ? `bg-black flex min-h-screen justify-center items-center` : `flex min-h-screen justify-center items-center`}>
                <div className="w-full max-w-xs">
                    <h1 className="text-3xl font-bold text-green-500 mb-2">{title}</h1>
                    <p className="text-slate-400 font-medium mb-3">Welcome, please enter your details</p>
                    {children}
                    {
                        type === 'login' ?
                            <Suggestion text="Dont have an account?" to="/register" textLink="Register" /> :
                            <Suggestion text="Already have an account?" to="/login" textLink="Login" />
                    }
                </div>
            </div>
        </div>
    )
}

const Suggestion = ({ text, to, textLink }) => {
    return (
        <p className="text-md text-slate-500 font-medium">{text}<Link className="text-green-500" to={to}> {textLink}</Link></p>
    )
}

export default AuthLayout;