import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGet } from "../../api/spacetraders";
import { setLoading } from "../../redux/reducers/loadingSlice";
import { AvailableShipResponse, Ship } from "../../data/types";

const AvailableShips = () => {
    const dispatch = useAppDispatch();
    const currSystem = useAppSelector(state => state.currSystem.value);
    const loadingStatus = useAppSelector(state => state.loading.value);

    const [availableShips, setAvailableShips] = useState<Ship[]>([]);

    const getAvailableShips = async () => {
        dispatch(setLoading(true));
        const res: AvailableShipResponse = await fetchGet(`/systems/${currSystem}/ship-listings`, {});
        setAvailableShips(res.shipListings);
        dispatch(setLoading(false));
    };

    useEffect(() => {
        getAvailableShips();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loadingStatus) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            {availableShips.map((ship, index) => (
                <Card key={index} className='ship-card'>
                    <Card.Title>Type: {ship.type}</Card.Title>
                    <Card.Text>Ship Class: {ship.class}</Card.Text>
                    <Card.Text>Manufacturer: {ship.manufacturer}</Card.Text>
                    <Card.Text>Plating: {ship.plating}</Card.Text>
                </Card>
            ))}
        </div>
    )
}

export default AvailableShips;