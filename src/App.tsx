//import { useNavigate } from "react-router-dom";
//import { useAppSelector } from './redux/hooks';
import Account from './views/Account/Account';
import Login from './views/Login/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    //const user = useAppSelector(state => state.username.value);
    const userToken = localStorage.getItem("TOKEN")

    if (!userToken) {
        return (
            <Login />
        );
    }

    return (
        <Account />
    )

}

export default App;
