import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../../redux/hooks';

import { fetchGet } from '../../api/spacetraders';
import { Location, LocationsResponse } from '../../data/types';
import './Navigation.css';

const Navigation = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const currSystem = useAppSelector(state => state.currSystem.value);
    const navigate = useNavigate();

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