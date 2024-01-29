import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-slate-600">Oops! || {error.status}</h1>
                <p className="text-md text-slate-500 font-medium mt-2">Sorry, An unexpected error has occured</p>
                <p className="text-md text-slate-500 font-medium">{error.statusText || error.message}</p>
            </div>
        </div>
    )
}

export default ErrorPage;