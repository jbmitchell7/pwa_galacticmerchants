import React, {useState} from 'react';
import './App.css';
import { SpaceTraders } from 'spacetraders-sdk';

function App() {

    const [gameStatus, setGameStatus] = useState('N/A');
    const spaceTraders = new SpaceTraders();

    const getGameStatus = async () => {
        const response = await spaceTraders.getStatus();
        setGameStatus(response.status);
    } 

    return (
        <div className="App">
        <header className="App-header">
            <button
            onClick={getGameStatus}>
                Check Game Status
            </button>
            <p>{gameStatus}</p>
        </header>
        </div>
    );
}

export default App;
