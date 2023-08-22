import React from 'react';
import { useParams } from 'react-router-dom';

interface RouteParams {
    tranId: string;
}

const PaymentSuccess: React.FC = () => {
    const { tranId } = useParams<RouteParams>();

    return (
        <div>
            <h1 className="text-center text-2xl mt-5">Payment Success: {tranId}</h1>
        </div>
    );
};

export default PaymentSuccess;
