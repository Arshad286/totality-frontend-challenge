
import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import CartItems from './CartItems';
import './Cart.css';
import { villas } from '../villas';

const Cart = () => {
  const { cartItems, calculateTotalPrice } = useContext(ShopContext);
 
  const isCartEmpty = Object.values(cartItems).every(quantity => quantity === 0);

  return (
    <div className='cart'>    
      <div>
        <h1>Your Cart Items</h1>
      </div>

      {isCartEmpty ? ( 
        <p>Your cart is empty</p>
      ) :(
      <div className='cart'>
        {Object.keys(cartItems).map((villaId) => {
          const quantity = cartItems[villaId];
          if (quantity !== 0) {
            const villa = villas.find((villa) => villa.id === Number(villaId));
            return <CartItems key={villaId} villa={villa} />;
          }
        })}
      </div>
      )}
      <div className='totalBalance'>
        Total Balance: ${calculateTotalPrice()}
      </div>
    </div>
  );
};

export default Cart;
