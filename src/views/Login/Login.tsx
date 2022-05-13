import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { fetchPost } from '../../api/spacetraders';
import { TokenResponse } from '../../data/types';
import './Login.css';

function Login() {
    const [usernameInput, setUsernameInput] = useState('')

    const claimUsername = async (usernameAttempt: string) => {
        try {
            const response: TokenResponse = await fetchPost(`/users/${usernameAttempt}/claim`, {});
            localStorage.setItem("TOKEN", response.token);
            console.log(localStorage.getItem("TOKEN"));
        } catch {
            alert("Username already exists. Try again or enter token for the username.")
        }
    }

    return (
        <div>
            <Form>
                <Form.Control type='text' placeholder='Username' onChange={e => setUsernameInput(e.target.value)} />
                <Button
                    onClick={() => claimUsername(usernameInput)}>
                    Claim Username
                </Button>
            </Form>
        </div>
    );
}

export default Login;