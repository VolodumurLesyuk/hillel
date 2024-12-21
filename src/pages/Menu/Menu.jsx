import "./Menu.css";
import PizzaItem from "../../components/PizzaItem/PizzaItem.jsx";
import {useContext, useEffect, useState} from "react";
import {PizzaContext} from "../../context/PizzaContext.jsx";
import useFetch from "../../utils/hooks/useFetch.jsx";


const Menu = () => {

    const {pizzaContext, dispatch} = useContext(PizzaContext);

    const {data, isLoading, error} = useFetch("https://react-fast-pizza-api.onrender.com/api/menu")

    useEffect(() => {
        console.log(data)
        dispatch({type: "INIT", payload: data.data});

    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (

        <div className="menu-container">

            {error && <div>{error}</div>}

            {pizzaContext.pizzaItems.map((pizza) => (
                <PizzaItem key={pizza.id} pizza={pizza}/>
            ))}
        </div>
    );
};

export default Menu;
