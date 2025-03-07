import React, { useEffect, useState } from "react";
import { HeaderThree } from "../../Components/Headers/HeaderThree";
import PaymentCard from "./PaymentCard";
import "./style.css";
import { axiosInstance } from "../../axios/axios";



const getPaymentLabel = (paymentFor) => {
  switch (paymentFor) {
    case "ConsultancyCard":
      return "Consultancy"
  }

}
const PaymentHistory = () => {
  const breadcrumbPath = [{ label: "Home", path: "/" }];
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    const fetchPaymentsHistory = async () => {
      const { data } = await axiosInstance.post("/user/payment/paymentHistory");
      setPaymentData(data?.data);
    };
    fetchPaymentsHistory();
  }, []);
  return (
    <div>
      <HeaderThree title='Payment History' breadcrumbPath={breadcrumbPath} />
      <div className='payment__container'>
        {paymentData.length > 0 &&
          paymentData.map((payment) => {
            const {
              referenceId,
              razorpayOrderId,
              transactionId,
              amount,
              createdAt,
              referenceModel,
            } = payment;

            return (
              <PaymentCard
                key={payment._id}
                title={referenceId.title}
                status={getPaymentLabel(referenceModel)}
                orderId={razorpayOrderId}
                transactionId={transactionId}
                amount={amount}
                date={new Date(createdAt).toLocaleDateString()}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PaymentHistory;
