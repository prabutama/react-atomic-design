const Button = ({ type, style, text, onClick }) => {
    return (
        <div className="text-white">
            <button
                type={type}
                className={`${style} px-3 py-2 rounded-full border my-4 font-medium w-full hover:opacity-90`}
                onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default Button;