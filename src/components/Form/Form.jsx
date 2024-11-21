import './Form.css'
import Input from '../Input/Input.jsx'
import Button from '../Button/Button.jsx'
import {useState} from "react";

const Form = () => {
    const [username, setUsername] = useState('')

    const handlerInputOnChange = (event) => {
        setUsername(event.target.value);
        console.log(event.target.value)
    }

    return (
        <main>
            <h1>The best pizza.</h1>
            <p className="subtitle">Straight out of the oven, straight to you.</p>
            <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
            <Input value={username} onChange={handlerInputOnChange} type="text" placeholder="Your full name" className='form-input' aria_label="Your full name" />
            <Button className="btn" text={'Start Order'}/>
        </main>
    )
}

export default Form