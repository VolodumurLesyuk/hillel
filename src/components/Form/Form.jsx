import './Form.css'
import Input from '../Input/Input.jsx'
import Button from '../Button/Button.jsx'

const Form = () => {
    return (
        <main>
            <h1>The best pizza.</h1>
            <p className="subtitle">Straight out of the oven, straight to you.</p>
            <p className="welcome">👉 Welcome! Please start by telling us your name:</p>
            <Input/>
            <Button text={'Start Order'}/>
        </main>
    )
}

export default Form