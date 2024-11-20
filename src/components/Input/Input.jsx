import './Input.css'
import {useState} from "react";

const Input = (props) => {
    const {type, placeholder, className, aria_label} = props
    const [value, setValue] = useState('')

    const handlerInputOnChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value)
    }


    return (
        <input value={value} onChange={handlerInputOnChange} type={type} placeholder={placeholder} aria-label={aria_label} className={className}/>
    )
}

export default Input