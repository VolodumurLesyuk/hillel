import './Input.css'

const Input = (props) => {
    const {type, placeholder, className, aria_label} = props
    return (
        <input type={type} placeholder={placeholder} aria-label={aria_label} className={className}/>
    )
}

export default Input