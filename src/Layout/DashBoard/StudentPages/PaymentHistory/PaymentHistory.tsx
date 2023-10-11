import React, { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  AuthContextType,
} from "../../../../Provider/AuthProvider/AuthProvider";
import dateFormat from "dateformat";


interface PaymentHistoryItem {
  product_name: string;
  total_amount: number;
  _id: string;
  data: string;
  date: string;
}

const PaymentHistory: React.FC = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [paymentHistory, setPaymentHistory] = useState<PaymentHistoryItem[]>(
    []
  );

  useEffect(() => {
    fetch(
      `https://spoken-english-server-xi.vercel.app/enrolled-courses/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPaymentHistory(data);
      });
  }, [user]);

  console.log(paymentHistory, "payment history");

  return (
    <div className=" ">
      <h1 className="text-4xl  mt-20 text-center font-serif text-white ">Payment History</h1>
      <div className="flex justify-center mt-20 min-h-[100vh] ">
        <div className="overflow-x-auto w-full ">
          <table className="table table-zebra border shadow-lg  rounded-lg bg-white  overflow-scroll">
            <thead>
              <tr>
                <th>No:</th>
                <th>Name</th>
                <th>Price</th>
                <th>TransactionId</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item.product_name}</td>
                  <td>{item.total_amount}</td>
                  <td>{item._id}</td>
                  <td>{dateFormat(item?.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
