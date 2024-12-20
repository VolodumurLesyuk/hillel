import {createContext, useReducer, useState} from "react";
import cartItems from "../pages/Cart/data.js";

export const PizzaContext = createContext(null);

const PizzaContextProvider = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "INIT":
                return {
                    ...state,
                    pizzaItems: action.payload, // завантаження даних із сервера
                };
            case "addPizza":
                return {
                    ...state,
                    cartItems: state.cartItems.some((item) => item.id === action.payload.id)
                        ? state.cartItems.map((item) =>
                            item.id === action.payload.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        )
                        : [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            case "removePizza":
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
                };
            case "incrementQuantity":
                return {
                    ...state,
                    cartItems: state.cartItems.map(pizza =>
                        pizza.id === action.payload.id
                            ? { ...pizza, quantity: pizza.quantity + 1 }
                            : pizza
                    ),
                }
            case "decrementQuantity":
                return {
                    ...state,
                    cartItems: state.cartItems.map(pizza =>
                        pizza.id === action.payload.id
                            ? { ...pizza, quantity: pizza.quantity - 1 }
                            : pizza
                    ).filter(pizza => pizza.quantity > 0),
                }
            case "deleteAllPizza":
                return {
                    ...state,
                    cartItems: [],
                }
            default:
                return state;
        }
    }
    const initialState = {
        cartItems: [],
        pizzaItems: [],
    }
    const [pizza, dispatch] = useReducer(reducer, initialState)


    const pizzaContext = {
        pizzaContext: pizza,
        dispatch: dispatch,
    };

    return <PizzaContext.Provider value={pizzaContext}>{children}</PizzaContext.Provider>;
}

export default PizzaContextProvider;