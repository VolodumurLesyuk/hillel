import "./BlockButton.css"
import Button from "../Button/Button.jsx";
import {useContext, useReducer, useState} from "react";
import { PizzaContext } from "../../context/PizzaContext.jsx";

const BlockButton = (props) => {
    const {dispatch} = useContext(PizzaContext)

    const [counter, setCounter] = useState(1);
    const [isCounterVisible, setIsCounterVisible] = useState(false);

    const handlerAddToCardButtonClick = (event, isCounterVisible) => {
        setIsCounterVisible(true);
        dispatch({
            type: "addPizza",
            payload: {
                id: props.pizza.id,
                name: props.pizza.name,
                ingredients: props.pizza.ingredients,
                quantity: 1,
            }
        })
    }

    const handlerDecrementButtonClick = (event) => {
        dispatch({
            type: "decrementQuantity",
            payload: {
                id: props.pizza.id,
            }
        })
        if (counter > 1) {
            setCounter(counter - 1);
        }
        else {
            setIsCounterVisible(false);
        }
    }
    const handlerIncrementButtonClick = (event) => {
        setCounter(counter + 1);

        dispatch({
            type: "incrementQuantity",
            payload: {
                id: props.pizza.id,
            }
        })
    }

    return (
        <div className="cart-controls">
            {!isCounterVisible &&
                (!props.pizza.soldOut &&
                    <Button onClick={handlerAddToCardButtonClick} className="add-to-cart" text="ADD TO CART"/>)
            }
            {isCounterVisible && (
                <div className="counter">
                    <Button onClick={handlerDecrementButtonClick} className="decrement"
                            aria-label="Decrease quantity">-
                    </Button>
                    <span>{counter}</span>
                    <Button onClick={handlerIncrementButtonClick} className="increment"
                            aria-label="Increase quantity">+
                    </Button>
                </div>
            )}
        </div>
    )
}

export default BlockButton