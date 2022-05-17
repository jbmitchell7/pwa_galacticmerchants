import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
//import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchGet } from '../../api/spacetraders';
import { User } from '../../data/types';
import './Account.css';
//import { setUsername } from '../../redux/reducers/usernameSlice';

const Account = () => {
    const [userData, setUserData] = useState({
        username: '',
        credits: 0,
        shipCount: 0,
        structureCount: 0,
        joinedAt: ''
    });

    let navigate = useNavigate();

    const getAccount = async () => {
        localStorage.setItem("TOKEN", '2ec321da-0367-45a5-98a7-09aaf539137e')
        const response = await fetchGet("/my/account", {});
        const accountData: User = response.user
        setUserData(accountData)
        //dispatch(setUsername(accountData.username));
    }

    const logout = () => {
        localStorage.removeItem("TOKEN");
        navigate("/login");
    }

    useEffect(() => {
        getAccount();
    }, [])

    return (
        <div>
            <h1>Account Info:</h1>
            <p className='text-sky-400'>Username: {userData.username}</p>
            <p>Credits: {userData.credits}</p>
            <p>Ships: {userData.shipCount}</p>
            <Button
                onClick={() => logout()}>
                Logout
            </Button>
        </div>
    );
}

export default Account;