import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Loans from "../../components/Loans/Loans";
import AvailableShips from "../../components/Ships/AvailableShips";
import MyShips from "../../components/Ships/Ships";
import './Dashboard.scss';

const Dashboard = () => {
    const [view, setView] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('TOKEN');
        if (!token) {
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [view]);

    return (
        <Container>
            <Row>
                <h3>Welcome to the Command Center</h3>
            </Row>
            <Row>
                <Col>
                    <Button
                        onClick={() => setView("loans")}
                        variant="custom">
                        View Available Loans
                    </Button>
                </Col>
                <Col>
                    <Button
                        onClick={() => setView("available-ships")}
                        variant="custom">
                        View Available Ships
                    </Button>
                </Col>
                <Col>
                    <Button
                        onClick={() => setView("my-ships")}
                        variant="custom">
                        View My Ships
                    </Button>
                </Col>
            </Row>
            <Row>
                {(view === "loans") ? <Loans /> :
                    (view === "my-ships") ? <MyShips /> :
                        (view === "available-ships") ? <AvailableShips /> : null
                }
            </Row>
        </Container>
    )

}

export default Dashboard;