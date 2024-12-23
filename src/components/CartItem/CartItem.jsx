import "./CartItem.css"
import Button from "../Button/Button.jsx";
import {useContext} from "react";
import {PizzaContext} from "../../context/PizzaContext.jsx";

const CartItem = ({pizza}) => {
    const {dispatch} = useContext(PizzaContext);
    return (
        <div className="cart-item">
            <span className="quantity-text">{pizza.quantity}×</span>
            <span>{pizza.name}</span>
            <span className="price">€{pizza.unitPrice}</span>
            <div className="quantity-controls">
                <Button onClick={() => dispatch({
                    type: "decrementQuantity",
                    payload: { id: pizza.id },
                })} className="quantity-btn">-</Button>
                <span>{pizza.quantity}</span>
                <Button onClick={() => dispatch({
                    type: "incrementQuantity",
                    payload: { id: pizza.id },
                })} className="quantity-btn">+</Button>
                <Button onClick={() => dispatch({
                    type: "removePizza",
                    payload: { id: pizza.id },
                })} className="delete-btn">DELETE</Button>
            </div>
        </div>

    )
}

export default CartItem;