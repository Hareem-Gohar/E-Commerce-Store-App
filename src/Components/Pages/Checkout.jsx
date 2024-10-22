import React, { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { CurrencyFormat } from '../Utility/CurrencyFormat';
import NavigateBack from '../Common/NavigateBack';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, total_items, total_amount, checkout } = useCartContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log('Order Details:', formData, cart);
        await checkout(); 
        setLoading(false);
        navigate('/order-confirmation'); 
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex gap-6 items-center mb-6">
                <NavigateBack />
                <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
            </div>
            {cart.length > 0 ? (
                <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                    {/* Checkout form */}
                    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 w-full md:w-2/3 rounded-lg shadow-lg border border-gray-300">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Shipping Information</h2>

                        {['name', 'email', 'address', 'phone'].map((field, index) => (
                            <div key={index} className="mb-4">
                                <label className="block text-sm font-medium mb-1 text-gray-600" htmlFor={field}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                    required
                                />
                            </div>
                        ))}

                        <button
                            type="submit"
                            className={`w-full max-w-xs mx-auto block bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : 'Place Order'}
                        </button>
                    </form>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-full md:w-1/3">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Order Summary</h2>
                        <ul className="mb-4">
                        
                            {cart.map((item) => (
                                <li key={item.id} className="flex justify-between items-center mb-2 border-b py-2">
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded" />
                                        <div>
                                            <p className="font-medium text-gray-800">{item.title}</p>
                                            <p className="text-sm text-gray-600">Quantity: {item.amount}</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-gray-800">{CurrencyFormat(item.amount * item.price)}</p>
                                </li>
                            ))
                            }
                        </ul>
                        <div className="flex justify-between font-semibold text-lg text-gray-800 border-t pt-2">
                            <span>Total Items: {total_items}</span>
                            <span>Total: {CurrencyFormat(total_amount)}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-gray-600 ">Your cart is empty. Add your favorite items to proceed.</div>
            )}

        </div>
    );
};

export default Checkout;
