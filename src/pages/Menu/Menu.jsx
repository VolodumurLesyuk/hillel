import "./Menu.css";
import PizzaItem from "../../components/PizzaItem/PizzaItem.jsx";
import {useContext, useEffect, useState} from "react";
import {PizzaContext} from "../../context/PizzaContext.jsx";


const Menu = () => {
    // const [pizzas, setPizzas] = useState([]);
    const {pizzaContext, dispatch} = useContext(PizzaContext);
    useEffect(() => {
        const getPizzas = async () => {
            try {
                const res = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");
                if (!res.ok) {
                    throw new Error("Failed to fetch Pizzas");
                }
                const data = await res.json();
                // setPizzas(data.data);
                dispatch({type: "INIT", payload: data.data});
            } catch (error) {
                console.error(error.message);
            }
        };

        getPizzas();
    }, [dispatch]);
    return (
        <div className="menu-container">
            {pizzaContext.pizzaItems.map((pizza) => (
                <PizzaItem key={pizza.id} pizza={pizza}/>
            ))}
        </div>
    );
};

export default Menu;
