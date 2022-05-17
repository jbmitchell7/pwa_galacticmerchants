import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './views/Login/Login';
import Dashboard from './views/Dashboard/Dashboard';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Welcome from './views/Welcome/Welcome';
import Account from './views/Account/Account';
import Navigation from './views/Navigation/Navigation';
import './App.css';
import { Row } from 'react-bootstrap';

const App = () => {
    const userToken = localStorage.getItem("TOKEN")

    return (
        <Router>
            <NavigationBar />
            <Row className='app-content'>
                <Routes>
                    <Route path='/' element={userToken ? <Dashboard /> : <Login />} />
                    <Route path='/navigation' element={<Navigation />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/welcome' element={<Welcome />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </Row>
        </Router>
    )

}

export default App;
