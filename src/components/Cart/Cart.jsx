import cartItems from "./data.js";
import "./Cart.css"
import CartItem from "../CartItem/CartItem.jsx";

const Cart = () => {
    return (
        <div className="container">
            <a href="#" className="back-link">← Back to menu</a>
            <h1 className="cart-title">Your cart, vlad</h1>
            <div className="cart-items">
                {cartItems.map((pizza) => (
                    <CartItem key={pizza.id} pizza={pizza}/>
                ))}
            </div>

            <div className="cart-actions">
                <button className="order-btn">Order pizzas</button>
                <button className="clear-btn">Clear cart</button>
            </div>
        </div>
    )
}

export default Cart;