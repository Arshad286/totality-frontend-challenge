
import React, { useContext, useState } from 'react';
import './Cart.css'
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';



const CartItems = ({villa}) => {
  
  const {addToCart, removeFromCart} = useContext(ShopContext);
  const[quantity, setquantity] = useState(1);


  if (!villa) {
    return null; 
  }


  const Navigate = useNavigate(); 
  
  const handleCheckout = () => {
     Navigate("/Checkout");
  
  };

  
   
  const handleAddToCart = () => {
    addToCart(villa.id);
    setquantity(prevQuantity => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(villa.id);
    setquantity(prevQuantity => prevQuantity - 1);
  };



  return (
    <div className='cartItems'>
       <img src={villa.image} alt={villa.name} className='cartItemImage' />
       <div className='description'>
           <p><b>{villa.name}</b></p>
           <p><b> Location 🏞  {villa.location}</b></p>
           <p>Rating⭐ {villa.rating}</p>
           <p> Rent💲 {villa.dailyRent}</p>
              

           <div className='cartButtons'>
           <button onClick={handleAddToCart}>+</button>
            {quantity}
          <button onClick={handleRemoveFromCart}>-</button></div>
          
           </div>
           
        <button className='checkout'  onClick={handleCheckout}>BOOK NOW</button>
       </div>
  );
};

export default CartItems;
