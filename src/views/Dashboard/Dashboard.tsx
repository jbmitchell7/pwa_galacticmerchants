import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('TOKEN');
        if (!token) {
            navigate("/login");
        }
    })

    return (
        <div>
            Welcome to Your Dashboard
        </div>
    )

}

export default Dashboard;