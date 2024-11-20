import './App.css';
import Header from './components/Header/Header.jsx';
import Form from "./components/Form/Form.jsx";
import Menu from './components/Menu/Menu.jsx';

const App = () => {
    return (
        <div className="container">
            <Header />
            {/*<Menu/>*/}
            <Form />
        </div>
    )
}

export default App;