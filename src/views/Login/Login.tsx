import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { fetchGet, fetchPost } from '../../api/spacetraders';
import { TokenResponse } from '../../data/types';
import './Login.scss';

const Login = () => {
    const [usernameInput, setUsernameInput] = useState('');
    const [tokenInput, setTokenInput] = useState('');
    let navigate = useNavigate();

    const claimUsername = async (usernameAttempt: string) => {
        try {
            const response: TokenResponse = await fetchPost(`/users/${usernameAttempt}/claim`, {});
            localStorage.setItem("TOKEN", response.token);
            console.log(localStorage.getItem("TOKEN"));
        } catch {
            alert("Username already exists. Try again or enter token for the username.")
        }
    }

    const setLoginToken = async (token: string) => {
        try {
            localStorage.setItem("TOKEN", token);
            await fetchGet("/my/account", {});
            navigate("/dashboard");
        } catch {
            alert("Invalid Token");
            localStorage.removeItem("TOKEN");
        }
    }

    return (
        <div className='login-container'>
            <Form className='login-form'>
                <Form.Text className='form-header'>
                    Welcome to Galactic Merchants
                </Form.Text><br /><br />
                <Form.Text className='form-instructions'>
                    If you would like to start a new game enter a username to claim below
                </Form.Text>
                <Form.Control
                    type='text'
                    placeholder='Username'
                    onChange={e => setUsernameInput(e.target.value)} />
                <Button
                    className='login-btn'
                    onClick={() => claimUsername(usernameInput)}>
                    Claim Username
                </Button><br />
                <Form.Text className='form-instructions'>
                    If you have already claimed a username and have your login token, enter it below
                </Form.Text>
                <Form.Control
                    type='password'
                    placeholder='Token'
                    onChange={e => setTokenInput(e.target.value)} />
                <Button
                    className='login-btn'
                    onClick={() => setLoginToken(tokenInput)}>
                    Login with Token
                </Button>
            </Form>
        </div>
    );
}

export default Login;