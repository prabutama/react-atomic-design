const Button = ({ type, color, text }) => {
    return (
        <div>
            <button type={type} className={`${color} px-3 py-2 rounded-full border my-4 text-white font-medium w-full hover:opacity-90`}>{text}</button>
        </div>
    )
}

export default Button;