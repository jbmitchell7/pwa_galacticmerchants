import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { fetchGet } from '../../api/spacetraders';
import { User } from '../../data/types';
import './Account.scss';

const Account = () => {
    const [userData, setUserData] = useState({
        username: '',
        credits: 0,
        shipCount: 0,
        structureCount: 0,
        joinedAt: ''
    });

    const navigate = useNavigate();

    const getAccount = async () => {
        const token = localStorage.getItem('TOKEN');
        if (!token) {
            navigate("/login");
            return
        }
        const response = await fetchGet("/my/account", {});
        const accountData: User = response.user
        setUserData(accountData);
    }

    const logout = () => {
        localStorage.removeItem("TOKEN");
        navigate("/login");
    }

    useEffect(() => {
        getAccount();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h1>Account Info:</h1>
            <p className='text-sky-400'>Username: {userData.username}</p>
            <p>Credits: {userData.credits}</p>
            <p>Ships: {userData.shipCount}</p>
            <Button
                onClick={() => logout()}
                variant='danger'>
                Logout
            </Button>
        </div>
    );
}

export default Account;