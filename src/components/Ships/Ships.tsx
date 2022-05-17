import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { fetchGet } from "../../api/spacetraders";
import { setLoading } from "../../redux/reducers/loadingSlice";
import { ShipsResponse, YourShip } from "../../data/types";

const MyShips = () => {
    const dispatch = useAppDispatch();
    const loadingStatus = useAppSelector(state => state.loading.value);

    const [myShips, setMyShips] = useState<YourShip[]>([]);

    const getMyShips = async () => {
        dispatch(setLoading(true));
        const response: ShipsResponse = await fetchGet('/my/ships', {});
        setMyShips(response.ships);
        dispatch(setLoading(false));
    }

    useEffect(() => {
        getMyShips();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loadingStatus) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            {myShips.map(ship => (
                <div key={ship.id}>
                    <p>Ship ID: {ship.id}</p>
                    <p>Type: {ship.type}</p>
                    <p>Location: {ship.location}</p>
                </div>
            ))}
        </div>
    )
}

export default MyShips;