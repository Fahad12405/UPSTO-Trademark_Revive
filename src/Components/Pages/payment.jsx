import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/16/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import Swal from 'sweetalert2';


const PaymentPage = () => {
    const { sessionId } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [productPrice, setProductPrice] = useState(0);
    const [clientDetails, setClientDetails] = useState(null)
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [postalCode, setPostalCode] = useState('');
    const [isPaid, setIsPaid] = useState('pending');
    const [paid, setPaid] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPaymentDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/get-payment-details/${sessionId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                setProductPrice(data.data.amount);
                setClientDetails(data.data.clientDetails)
                setProductDetails(data.data.productDetails);
                setIsPaid(data.data.status)
                setClientSecret(data.data.clientSecret);
            } catch (error) {
                console.error('Error fetching payment details:', error);
                setError('Failed to load payment details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchPaymentDetails();
    }, [sessionId]);


    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!stripe || !elements) {
            return;
        }

        setTimeout(() => {
            setLoading(false);
            setPaid(true); // Show "Paid" after processing

            // After 2 seconds, reset paid state back to false
            setTimeout(() => {
                setPaid(false);
            }, 2000);

        }, 2000); // Simulating 2-second processing time

        const cardNumberElement = elements.getElement(CardNumberElement);
        const cardExpiryElement = elements.getElement(CardExpiryElement);
        const cardCvcElement = elements.getElement(CardCvcElement);

        if (!cardNumberElement || !cardExpiryElement || !cardCvcElement || !postalCode) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill your card details!',
            })
            return;
        }


        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardNumberElement,
                billing_details: {
                    address: {
                        postal_code: postalCode,
                    },
                },
            },
        });

        // console.log("elements=>", elements)
        // console.log("cardNumberElement=>", cardNumberElement)
        // console.log("cardExpiryElement=>", cardExpiryElement)
        // console.log("cardCvcElement=>", cardCvcElement)


        if (error) {
            console.error('Payment error:', error.message);
            setError('Card details are invalid!.');
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            try {
                console.log("paymentIntent=>", paymentIntent.status)
                const response = await fetch(`http://localhost:5000/api/create-payment/${sessionId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ sessionId }),
                });
                if (!response.ok) {
                    throw new Error('Failed to update payment status');
                }

                const result = await response.json();
                if (result.success) {
                    setIsPaid('complete');
                    Swal.fire({
                        icon: 'success',
                        title: 'Payment Completed Successfully',
                        text: 'Thank you for your payment!',
                    });
                    setTimeout(() => {
                        window.location.reload()
                    }, 10000);
                }

            } catch (err) {
                console.error('Error updating payment status:', err);
            }
        }
    };


    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500 border-solid"></div>
        </div>

    )

    console.log("Status=>", isPaid);
    // console.log("sessionId=>", sessionId)
    // console.log("productDetails=>", productDetails)



    return (
        <div className="h-full bg-slate-100 p-16">
            {isPaid === 'completed' && (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
                        <div className="flex items-center flex-col justify-center mb-6">
                            <CheckCircleIcon className="h-20 w-20 text-green-500 mb-4" />
                            <p className="text-2xl font-bold text-gray-800">
                                Payment Completed Successfully
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {productDetails && productDetails.product_image && productDetails.product_title && productDetails.product_description && productPrice ? (
                <>
                    <div className='flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-5 shadow-lg rounded-2xl bg-white'>
                        <div className="flex-1 bg-slate-200 p-5 md:p-10 rounded-l-2xl">
                            <img className="w-96 h-96 mx-auto object-cover rounded-xl" src={productDetails.product_image} alt={productDetails.product_title} />
                            <div className="p-6">
                                <h2 className="text-2xl text-center font-semibold">{productDetails.product_title}</h2>
                                <p className="my-4"><span className="font-bold">Description:</span> {productDetails.product_description}</p>
                                <p className="text-xl font-bold mb-5">Price: <span className="text-green-800" >$</span>{productPrice / 100}</p>

                                <div className="border-t border-white pt-4">
                                    <p className="text-gray-600 mb-2"><span className="font-semibold text-black">Name:</span> {clientDetails.clientName}</p>
                                    <p className="text-gray-600 mb-2"><span className="font-semibold text-black">Email:</span> {clientDetails.clientEmail}</p>
                                    <p className="text-gray-600 mb-2"><span className="font-semibold text-black">Number:</span> {clientDetails.clientNum}</p>
                                </div>
                                <h1 className='text-5xl font-bold text-center mt-4 pt-2 border-t border-white'>VEHWARE</h1>

                                {/* Payment Safety SVG Logos */}
                                <div className="flex justify-center  space-x-4">
                                    {/* Add your payment safety logos here */}
                                </div>
                            </div>
                        </div>

                        <div className='flex-1 p-5 md:p-10 flex flex-col justify-center'>
                            <h1 className='text-5xl font-semibold py-10 text-center'>
                                <span>
                                    <FontAwesomeIcon icon={faLock} className='h-10 w-10' />
                                </span>
                                Payment
                            </h1>

                            <form onSubmit={handleSubmit}>
                                {error && <p className="text-red-600 text-center py-2 bg-red-200 rounded-3xl">{error}</p>}

                                <div className="bg-white p-5">
                                    <label className="block mb-2 font-semibold text-gray-700">Card Number</label>
                                    <CardNumberElement className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white p-5">
                                        <label className="block mb-2 font-semibold text-gray-700">Expiry Date</label>
                                        <CardExpiryElement className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm" />
                                    </div>
                                    <div className="bg-white p-5">
                                        <label className="block mb-2 font-semibold text-gray-700">CVC</label>
                                        <CardCvcElement className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm" />
                                    </div>
                                </div>

                                <div className="bg-white p-5">
                                    <label className="block mb-2 font-semibold text-gray-700">Postal Code</label>
                                    <input
                                        minLength={1}
                                        maxLength={10}
                                        type="text"
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm"
                                        placeholder="Enter your postal code"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={!stripe || loading}
                                    className={`w-full py-3 px-4 mt-8 font-semibold text-white rounded-md transition-colors duration-300 ${!stripe || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center">
                                            {paid ? 'Paid' : 'Processing'}
                                        </div>
                                    ) : (
                                        <span className="flex items-center justify-center">
                                            <FontAwesomeIcon icon={faLock} className='h-4 w-4 mr-2' />
                                            Pay Now
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            ) : null}



            {error && (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-red-100 border border-red-400 text-red-700 rounded-lg p-4 max-w-md flex items-center">
                        <ExclamationCircleIcon className="h-6 w-6 mr-3" />
                        <p className="text-sm font-semibold">{error}</p>
                    </div>
                </div>
            )}

        </div>

    );
};

export default PaymentPage;