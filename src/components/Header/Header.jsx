import './Header.css'
import Input from "../Input/Input.jsx";
import {Link} from "react-router";

const Header = () => {
    return (
        <header>
            <div className="logo">PIZZA DAY</div>
            <div>
                <Link to="/menu">Меню</Link>
                <Link to="/cart">Кошик</Link>
            </div>
            <Input type="text" className="search-bar" placeholder="Search for the order #"/>
            <div className="username">VLAD</div>
        </header>
    )
}

export default Header