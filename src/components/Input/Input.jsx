import './Input.css'
import {useState} from "react";
import {useController} from "react-hook-form";

const Input = (props) => {
    const {type, placeholder, className, aria_label, value, onChange, id, required, onBlur, name, control, readOnly} = props
    let field;
    if (control) {
        ({ field } = useController({ name, control })); // Деструктуризація field
    }

    return (
        (
            control ? <input type={type} {...field} className={className} id={id} readOnly={readOnly}></input> :
            <input value={value} onChange={onChange} type={type} placeholder={placeholder} aria-label={aria_label}
                   className={className} id={id} required={required} onBlur={onBlur} readOnly={readOnly}/>
        )

    )
}

export default Input