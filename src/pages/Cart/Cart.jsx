import cartItems from "./data.js";
import "./Cart.css"
import CartItem from "../../components/CartItem/CartItem.jsx";
import Button from "../../components/Button/Button.jsx";
import {Link, useNavigate} from "react-router";
import {AuthContext} from "../../context/AuthContext.jsx";
import {PizzaContext} from "../../context/PizzaContext.jsx";
import {useContext} from "react";

const Cart = () => {
    const {pizzaContext, dispatch} = useContext(PizzaContext)
    const {username} = useContext(AuthContext)
    const navigate = useNavigate();

    return (

        <div className="container">
            <Link to="/menu" className="back-link">← Back to menu</Link>
            {pizzaContext.cartItems && pizzaContext.cartItems.length > 0 ? (
                <>
                    <h1 className="cart-title">Your cart, {username}</h1>
                    <div className="cart-items">
                        {pizzaContext.cartItems.map((pizza) => (
                        <CartItem key={pizza.id} pizza={pizza}/>
                        ))}
                    </div>

                    <div className="cart-actions">
                        <Button onClick={() => navigate("/order-form")} className="order-btn">Order pizzas</Button>
                        <Button onClick={() => dispatch({
                            type: "deleteAllPizza"
                        })} className="clear-btn">Clear cart</Button>
                    </div>
                </>
            ) : (
                <p>Your cart is still empty. Start adding some pizzas :)</p>
            )}
        </div>
    )
}

export default Cart;