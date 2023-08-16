import React, { useState } from 'react';

const Checkout: React.FC = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Here, you would typically send the payment information to a backend API for processing
        // and handle the enrollment process.

        // For the sake of this example, let's just log the payment information.
        console.log('Card Number:', cardNumber);
        console.log('Expiry Date:', expiryDate);
        console.log('CVV:', cvv);

        // Redirect the user to a thank you or confirmation page.
        // You can use history.push('/confirmation') here.
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold">Checkout</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <label>
                    Card Number:
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={event => setCardNumber(event.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Expiry Date:
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={event => setExpiryDate(event.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    CVV:
                    <input
                        type="text"
                        value={cvv}
                        onChange={event => setCVV(event.target.value)}
                        required
                    />
                </label>
                <br />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Pay and Enroll
                </button>
            </form>
        </div>
    );
};

export default Checkout;
