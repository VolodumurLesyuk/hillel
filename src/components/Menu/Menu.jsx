import "./Menu.css"
import Image from "../Image/Image.jsx"

import pizzas from "./data.js";

const Menu = (props) => {
    return (
        <div className="menu-container">
            {
                pizzas.map((pizza) => (
                    <div className="pizza-item" key={pizza.id}>
                        <Image src={pizza.imageUrl} alt={pizza.name + " Pizza"} className="pizza-image"/>
                        <div className="pizza-info">
                            <h2>{pizza.name}</h2>
                            <p className="ingredients">{pizza.ingredients.join(', ')}</p>
                            {!pizza.soldOut ? <p className="price">€{pizza.unitPrice}</p> :
                                <p className="sold-out">SOLD OUT</p>}

                        </div>
                        { !pizza.soldOut && <button className="add-to-cart">ADD TO CART</button> }

                    </div>
                ))
            }
        </div>
    )
}

export default Menu