import "./CartItem.css"
import Button from "../Button/Button.jsx";

const CartItem = ({pizza}) => {
    return (
        <div className="cart-item">
            <span className="quantity-text">{pizza.quantity}×</span>
            <span>{pizza.name}</span>
            <span className="price">€{pizza.price}</span>
            <div className="quantity-controls">
                <Button className="quantity-btn">-</Button>
                <span>{pizza.quantity}</span>
                <Button className="quantity-btn">+</Button>
                <Button className="delete-btn">DELETE</Button>
            </div>
        </div>

    )
}

export default CartItem;