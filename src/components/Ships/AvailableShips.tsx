import { useEffect, useState } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGet, fetchPost } from "../../api/spacetraders";
import { setLoading } from "../../redux/reducers/loadingSlice";
import { AvailableShipResponse, PurchaseResponse, Ship } from "../../data/types";

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

    const purchaseShip = async (shipType: string) => {
        const res: PurchaseResponse = await fetchPost(`/my/ships`, {
            location: currSystem,
            type: shipType
        });
        console.log(res);
    }

    if (loadingStatus) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <Container>
            <Row>
                {availableShips.map((ship, index) => (
                    <Col key={index} xl={3} lg={4} md={6}>
                        <Card bg='dark' className="ship-card">
                            <Card.Title className='ship-text'>Type: {ship.type}</Card.Title>
                            <Card.Text className='ship-text'>Ship Class: {ship.class}</Card.Text>
                            <Card.Text className='ship-text'>Manufacturer: {ship.manufacturer}</Card.Text>
                            <Card.Text className='ship-text'>Plating: {ship.plating}</Card.Text>
                            <Button
                                variant='primary'
                                onClick={() => purchaseShip(ship.type)}>
                                Buy Ship
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    )
}

export default AvailableShips;