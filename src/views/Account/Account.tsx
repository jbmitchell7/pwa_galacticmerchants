import { useEffect, useState } from 'react';
//import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchGet } from '../../api/spacetraders';
import { User } from '../../data/types';
import './Account.css';
//import { setUsername } from '../../redux/reducers/usernameSlice';

function Account() {
    const [userData, setUserData] = useState({
        username: '',
        credits: 0,
        shipCount: 0,
        structureCount: 0,
        joinedAt: ''
    });

    //const user = useAppSelector(state => state.username.value);
    //const dispatch = useAppDispatch();

    //spaceTraders.init('jakem', '2ec321da-0367-45a5-98a7-09aaf539137e')

    const getAccount = async () => {
        localStorage.setItem("TOKEN", '2ec321da-0367-45a5-98a7-09aaf539137e')
        const response = await fetchGet("/my/account", {});
        const accountData: User = response.user
        setUserData(accountData)
        //dispatch(setUsername(accountData.username));
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
        </div>
    );
}

export default Account;