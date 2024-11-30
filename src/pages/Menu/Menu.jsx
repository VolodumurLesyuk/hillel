import "./Menu.css";
import PizzaItem from "../../components/PizzaItem/PizzaItem.jsx";
import {useEffect, useState} from "react";


const Menu = () => {
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
        const getPizzas = async () => {
            try {
                const res = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");
                if (!res.ok) {
                    throw new Error("Failed to fetch Pizzas");
                }
                const data = await res.json();
                setPizzas(data.data);
            } catch (error) {
                console.error(error.message);
            }
        };

        getPizzas();
    }, []);
    return (
        <div className="menu-container">
            {pizzas.map((pizza) => (
                <PizzaItem key={pizza.id} pizza={pizza}/>
            ))}
        </div>
    );
};

export default Menu;
