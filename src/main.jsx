import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
import AuthContextProvider from "./context/AuthContext.jsx";
import PizzaContextProvider from "./context/PizzaContext.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <PizzaContextProvider>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </PizzaContextProvider>
    </BrowserRouter>
)
