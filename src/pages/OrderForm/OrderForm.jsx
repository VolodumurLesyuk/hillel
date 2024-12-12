import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import './OrderForm.css'

const OrderForm = () => {
    const { username } = useContext(AuthContext);
    return (
        <div className="container">
            <h1>Ready to order? Let's go!</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Input type="text" id="firstName" value={username} readOnly/>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone number</label>
                    <Input type="tel" id="phone" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <div className="input-wrapper">
                        <Input type="text" id="address" required/>
                    </div>
                </div>

                <div className="checkbox-group">
                    <div className="checkbox-wrapper">
                        <Input type="checkbox" id="priority"/>
                        <label htmlFor="priority">Want to give your order priority?</label>
                    </div>
                </div>

                <Button type="submit" className="order-btn">
                    Order now for €12.00
                </Button>
            </form>
        </div>
    )
}

export default OrderForm