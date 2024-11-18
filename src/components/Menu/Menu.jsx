import "./Menu.css";
import PizzaItem from "../PizzaItem/PizzaItem.jsx";
import pizzas from "./data.js";

const Menu = () => {
    return (
        <div className="menu-container">
            {pizzas.map((pizza) => (
                <PizzaItem key={pizza.id} pizza={pizza} />
            ))}
        </div>
    );
};

export default Menu;
