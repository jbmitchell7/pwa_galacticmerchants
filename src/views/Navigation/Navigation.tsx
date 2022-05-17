import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { fetchGet } from '../../api/spacetraders';
import { LocationsResponse } from '../../data/types';
import './Navigation.css';

const Navigation = () => {
    const [locations, setLocations] = useState([
        {
            allowsConstruction: false,
            name: '',
            symbol: '',
            type: '',
            x: 0,
            y: 0,
            traits: ['']
        }
    ]);
    const navigate = useNavigate();
    const currSystem = "OE";

    const getSystem = async () => {
        const token = localStorage.getItem('TOKEN');
        if (!token) {
            navigate("/login");
            return;
        }
        const response: LocationsResponse = await fetchGet(`/systems/${currSystem}/locations`, {});
        setLocations(response.locations)
    }

    useEffect(() => {
        getSystem();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h1>System Info:</h1>
            {locations.map(location => (
                <p key={location.symbol}>{location.name}</p>
            ))}
        </div>
    );
}

export default Navigation;