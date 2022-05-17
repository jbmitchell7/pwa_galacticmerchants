import { useEffect, useState } from "react";
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
                <div key={index}>
                    <p>Ship Class: {ship.class}</p>
                    <p>Type: {ship.type}</p>
                    <p>Manufacturer: {ship.manufacturer}</p>
                    <p>Plating: {ship.plating}</p>
                </div>
            ))}
        </div>
    )
}

export default AvailableShips;