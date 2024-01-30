const Button = ({ type, style, text }) => {
    return (
        <div>
            <button type={type} className={`${style} px-3 py-2 rounded-full border my-4 text-white font-medium w-full hover:opacity-90`}>{text}</button>
        </div>
    )
}

export default Button;