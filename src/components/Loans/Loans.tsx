import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { fetchGet } from "../../api/spacetraders";
import { AvailableLoan, AvailableLoanResponse } from "../../data/types";
import { setLoading } from "../../redux/reducers/loadingSlice";

const Loans = () => {
    const dispatch = useAppDispatch();
    const loadingStatus = useAppSelector(state => state.loading.value);

    const [availableloans, setAvailableLoans] = useState<AvailableLoan[]>([]);

    const getAvailableLoans = async () => {
        dispatch(setLoading(true));
        const response: AvailableLoanResponse = await fetchGet('/types/loans', {});
        setAvailableLoans(response.loans);
        dispatch(setLoading(false));
    }

    useEffect(() => {
        getAvailableLoans();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loadingStatus) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            {availableloans.map(loan => (
                <div key={loan.type}>
                    <p>${loan.amount}</p>
                    <p>Duration: {loan.termInDays} Days</p>
                    <p>Interest Rate: {loan.rate}%</p>
                </div>

            ))}
        </div>
    )

}

export default Loans;