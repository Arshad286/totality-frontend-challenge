
import React, { useContext, useState } from 'react';
import './Checkout.css'
import { ShopContext } from '../Context/ShopContext';


const CheckoutForm = ({ onSubmit }) => {

  const{calculateTotalPrice} = useContext(ShopContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    creditCardNumber: '',
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <h2>Checkout</h2>
      <p className="totalCost">Total Cost: Rs {calculateTotalPrice()}</p>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Credit Card Number:
        <input type="text" name="creditCardNumber" value={formData.creditCardNumber} onChange={handleChange} required />
      </label>

      <button type="submit"  className="submitButton">Submit Booking</button>
    </form>
  );
};

export default CheckoutForm;
