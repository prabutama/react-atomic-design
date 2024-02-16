const Input = ({placeholder, type, name}) => {
    return(
        <input
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        className="text-sm border w-full rounded-lg py-2 px-2 " />
    )
}

export default Input;