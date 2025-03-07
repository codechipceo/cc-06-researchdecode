
const PaymentCard = ({
  date,
  status,
  title,
  orderId,
  transactionId,
  amount,
}) => {
  return (
    <div className='payment-card'>
      <div className='flex justify-bw'>
        <div className='payment__date color'>{date}</div>
        <div className='payment__status'>{status}</div>
      </div>
      <div>
        <p className='payment__title'>{title}</p>
      </div>
      <div className='flex justify-bw payment__id--container'>
        <div className=''>
          <p className='bold'>Order Id</p>
          <p className='order-id'>{orderId}</p>
        </div>
        <div>
          <p className='bold'>Transaction Id</p>
          <p>{transactionId}</p>
        </div>
      </div>
      <div>
        <p className='amount bold'>Amount: {amount} Rs</p>
      </div>
    </div>
  );
};

export default PaymentCard;
