import cartItems from "./data.js";
import "./Cart.css"
import CartItem from "../../components/CartItem/CartItem.jsx";
import Button from "../../components/Button/Button.jsx";
import {Link} from "react-router";
import {AuthContext} from "../../context/AuthContext.jsx";
import {PizzaContext} from "../../context/PizzaContext.jsx";
import {useContext} from "react";

const Cart = () => {
    const {pizzaContext, dispatch} = useContext(PizzaContext)
    const {username} = useContext(AuthContext)

    return (
        <div className="container">
            <Link to="/menu" className="back-link">← Back to menu</Link>
            <h1 className="cart-title">Your cart, {username}</h1>
            <div className="cart-items">
                {pizzaContext && pizzaContext.length > 0 ? (
                    pizzaContext.map((pizza) => (
                        <CartItem key={pizza.id} pizza={pizza} />
                    ))
                ) : (
                    <p>Your cart is still empty. Start adding some pizzas :)</p>
                )}
            </div>

            <div className="cart-actions">
                <Button className="order-btn">Order pizzas</Button>
                <Button onClick={() => dispatch({
                    type: "deleteAllPizza"
                })} className="clear-btn">Clear cart</Button>
            </div>
        </div>
    )
}

export default Cart;