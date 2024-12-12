import './Header.css'
import Input from "../Input/Input.jsx";
import {Link} from "react-router";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

const Header = () => {
    const { username } = useContext(AuthContext);
    return (
        <header>
            <div className="logo">PIZZA DAY</div>
            <div>
                <Link to="/menu">Меню</Link>
                <Link to="/cart">Кошик</Link>
                <Link to="/order-form">Замовлення</Link>
            </div>
            {username ? <Input type="text" className="search-bar" placeholder="Search for the order #"/>: ""}
            <div className="username">{username ? username: ""}</div>
        </header>
    )
}

export default Header