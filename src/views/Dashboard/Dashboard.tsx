import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loans from "../../components/Loans/Loans";
import AvailableShips from "../../components/Ships/AvailableShips";
import MyShips from "../../components/Ships/Ships";

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
        <div>
            <h3>Welcome to Your Dashboard</h3>
            <Button onClick={() => setView("loans")}>
                View Available Loans
            </Button>
            <Button onClick={() => setView("available-ships")}>
                View Available Ships
            </Button>
            <Button onClick={() => setView("my-ships")}>
                View My Ships
            </Button>
            {(view === "loans") ? <Loans /> :
                (view === "my-ships") ? <MyShips /> :
                    (view === "available-ships") ? <AvailableShips /> : null
            }
        </div>
    )

}

export default Dashboard;