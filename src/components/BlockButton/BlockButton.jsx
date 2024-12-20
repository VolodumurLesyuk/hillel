import "./BlockButton.css";
import Button from "../Button/Button.jsx";
import { useContext } from "react";
import { PizzaContext } from "../../context/PizzaContext.jsx";

const BlockButton = (props) => {
    const { pizzaContext, dispatch } = useContext(PizzaContext);
    const cartItem = pizzaContext.cartItems.find((cart) => cart.id === props.pizza.id);

    return (
        <div className="cart-controls">
            {!cartItem ? (
                <Button
                    onClick={() =>
                        dispatch({ type: "addPizza", payload: props.pizza })
                    }
                    className="add-to-cart"
                    text="ADD TO CART"
                />
            ) : (
                <div className="counter">
                    <Button
                        onClick={() =>
                            dispatch({ type: "decrementQuantity", payload: props.pizza })
                        }
                        className="decrement"
                        aria-label="Decrease quantity">
                        -
                    </Button>
                    <span>{cartItem.quantity}</span>
                    <Button
                        onClick={() =>
                            dispatch({ type: "incrementQuantity", payload: props.pizza })
                        }
                        className="increment"
                        aria-label="Increase quantity">
                        +
                    </Button>
                </div>
            )}
        </div>
    );
};

export default BlockButton;
