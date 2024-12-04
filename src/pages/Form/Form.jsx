import './Form.css'
import Input from '../../components/Input/Input.jsx'
import Button from '../../components/Button/Button.jsx'
import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import {AuthContext} from "../../context/AuthContext.jsx";

const Form = () => {
    const { setUsername } = useContext(AuthContext);
    const [localUsername, setLocalUsername] = useState("");
    const navigate = useNavigate()

    const handlerInputOnChange = (event) => {
        setLocalUsername(event.target.value);
    }

    const handlerButtonClick = () => {
        setUsername(localUsername);
        navigate("/menu")
    }

    return (
        <main>
            <h1>The best pizza.</h1>
            <p className="subtitle">Straight out of the oven, straight to you.</p>
            <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
            <Input value={localUsername} onChange={handlerInputOnChange} type="text" placeholder="Your full name" className='form-input' aria_label="Your full name" />
            <Button onClick={handlerButtonClick} className="btn" text={'Start Order'}/>
        </main>
    )
}

export default Form