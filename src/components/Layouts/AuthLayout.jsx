
const AuthLayout = ({ children, title }) => {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold text-green-500 mb-2">{title}</h1>
                <p className="text-slate-400 font-medium mb-3">Welcome, please enter your details</p>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;