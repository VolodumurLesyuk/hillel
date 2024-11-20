import './Button.css'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.className}>{props.children ? props.children: props.text}</button>
    )
}

export default Button