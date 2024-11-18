import "./PizzaItem.css";
import Image from "../Image/Image.jsx";
import Button from "../Button/Button.jsx";

const PizzaItem = ({ pizza }) => {
    return (
        <div className="pizza-item">
            <Image src={pizza.imageUrl} alt={`${pizza.name} Pizza`} className="pizza-image" />
            <div className="pizza-info">
                <h2>{pizza.name}</h2>
                <p className="ingredients">{pizza.ingredients.join(", ")}</p>
                {!pizza.soldOut ? (
                    <p className="price">€{pizza.unitPrice}</p>
                ) : (
                    <p className="sold-out">SOLD OUT</p>
                )}
            </div>
            {!pizza.soldOut && <Button className="add-to-cart" text="ADD TO CART" />}
        </div>
    );
};

export default PizzaItem;
