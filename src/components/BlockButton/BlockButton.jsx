import "./BlockButton.css"
import Button from "../Button/Button.jsx";
import {useState} from "react";

const BlockButton = (props) => {

    const [counter, setCounter] = useState(1);
    const [isCounterVisible, setIsCounterVisible] = useState(false);

    const handlerAddToCardButtonClick = (event, isCounterVisible) => {
        setIsCounterVisible(true);
    }

    const handlerDecrementButtonClick = (event) => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
        else {
            setIsCounterVisible(false);
        }
    }
    const handlerIncrementButtonClick = (event) => {
        setCounter(counter + 1);
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