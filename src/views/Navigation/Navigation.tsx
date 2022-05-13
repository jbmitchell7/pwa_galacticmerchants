import { useEffect, useState } from 'react';
import { fetchGet } from '../../api/spacetraders';
import { LocationsResponse } from '../../data/types';
import './Navigation.css';

function Navigation() {
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
    ])

    const currSystem = "OE"
    const getSystem = async () => {
        localStorage.getItem("TOKEN")
        const response: LocationsResponse = await fetchGet(`/systems/${currSystem}/locations`, {});
        setLocations(response.locations)
    }

    useEffect(() => {
        getSystem();
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