import './Input.css'
import {useState} from "react";

const Input = (props) => {
    const {type, placeholder, className, aria_label, value, onChange} = props

    return (
        <input value={value} onChange={onChange} type={type} placeholder={placeholder} aria-label={aria_label} className={className}/>
    )
}

export default Input