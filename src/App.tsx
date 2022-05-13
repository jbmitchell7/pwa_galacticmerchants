import Account from './views/Account/Account';
import Login from './views/Login/Login';
import Navigation from './views/Navigation/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

    return (
        <div className="App">
            <Account />
            <Navigation />
            <Login />
        </div>
    );
}

export default App;
