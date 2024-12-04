import './App.css';
import {Routes, Route} from "react-router";
import Header from './components/Header/Header.jsx';
import Form from "./pages/Form/Form.jsx";
import Menu from './pages/Menu/Menu.jsx';
import Cart from "./pages/Cart/Cart.jsx";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    )
}

export default App;