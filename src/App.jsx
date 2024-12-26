import './App.css';
import {Routes, Route} from "react-router";
import Header from './components/Header/Header.jsx';
// import Form from "./pages/Form/Form.jsx";
// import Menu from './pages/Menu/Menu.jsx';
// import Cart from "./pages/Cart/Cart.jsx";
// import OrderForm from "./pages/OrderForm/OrderForm.jsx";
// import OrderStatus from "./pages/OrderStatus/OrderStatus.jsx";
import {lazy, Suspense} from "react";

const FormLazy = lazy(() => import('./pages/Form/Form.jsx'))
const MenuLazy = lazy(() => import('./pages/Menu/Menu.jsx'));
const CartLazy = lazy(() => import('./pages/Cart/Cart.jsx'));
const OrderFormLazy = lazy(() => import('./pages/OrderForm/OrderForm.jsx'));
const OrderStatusLazy  = lazy(() => import('./pages/OrderStatus/OrderStatus.jsx'));

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Suspense fallback={<h1>Loading...</h1>}><FormLazy /></Suspense>} />
                <Route path="/menu" element={<Suspense fallback={<h1>Loading...</h1>}><MenuLazy /></Suspense>} />
                <Route path="/cart" element={<Suspense fallback={<h1>Loading...</h1>}><CartLazy /></Suspense>} />
                <Route path="/order-form" element={<Suspense fallback={<h1>Loading...</h1>}><OrderFormLazy /></Suspense>} />
                <Route path="/order-status/:id" element={<Suspense fallback={<h1>Loading...</h1>}><OrderStatusLazy /></Suspense>} />
            </Routes>
        </>
    )
}

export default App;