// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



// const PaymentForm = ({paymentHandler}) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [paymentError, setPaymentError] = useState(null)
//     const [paymentSuccess, setPaymentSuccess] = useState(null);

    
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }
//         const cardElement = elements.getElement(CardElement);
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card: cardElement,
//         });

//         if (error) {
//             console.log('[error]', error);
//             setPaymentError(error.message)
//             setPaymentSuccess(null)
//         } else {
//             console.log('[PaymentMethod]', paymentMethod);
//             setPaymentSuccess(paymentMethod.id)
//             setPaymentError(null)
//             paymentHandler(paymentMethod.id)
//         }
//     };
//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit} style={{margin:"auto"}}>
//                 <CardElement style={{}} />
//                 <button className="btn btn-danger"type="submit" disabled={!stripe}>
//                     Pay
//                 </button>
//                 {
//                     paymentError && <p style = {{color: "red"}}> {paymentError} </p>
//                 }
//                 {
//                     paymentSuccess && <p style = {{color: "green"}}> Your Payment Successfully Done </p>
//                 }
//             </form>
//         </div>
//     );
// };

// export default PaymentForm;