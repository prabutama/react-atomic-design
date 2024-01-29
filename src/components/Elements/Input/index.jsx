import Input from "./input"
import Label from "./label"

const InputForm = ({label, type, placeholder, name}) => {
    return(
        <div className="mt-2">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name}/>
        </div>
    )
}

export default InputForm;