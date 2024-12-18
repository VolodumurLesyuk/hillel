import {createContext, useReducer, useState} from "react";

export const PizzaContext = createContext(null);

const PizzaContextProvider = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "addPizza":
                return [...state, action.payload];
            case "removePizza":
                return state.filter(pizza => pizza.id !== action.payload.id);
            case "incrementQuantity":
                return state.map(pizza =>
                    pizza.id === action.payload.id
                        ? { ...pizza, quantity: pizza.quantity + 1 }
                        : pizza
                );
            case "decrementQuantity":
                return state.map(pizza =>
                    pizza.id === action.payload.id
                        ? { ...pizza, quantity: pizza.quantity - 1 }
                        : pizza
                ).filter(pizza => pizza.quantity > 0);
            case "deleteAllPizza":
                return []
            default:
                return state;
        }
    }

    const [pizza, dispatch] = useReducer(reducer,[])


    const pizzaContext = {
        pizzaContext: pizza,
        dispatch: dispatch,
    };

    return <PizzaContext.Provider value={pizzaContext}>{children}</PizzaContext.Provider>;
}

export default PizzaContextProvider;