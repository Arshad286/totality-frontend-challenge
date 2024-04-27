// ShopContextProvider.js
import React, { createContext, useState } from 'react';
import { villas } from '../villas';

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < villas.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [totalPrice, setTotalPrice] = useState(0);

  
  const addToCart = (villaId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[villaId] = updatedCart[villaId] ? updatedCart[villaId] + 1 : 1;
      return updatedCart;
    });
    
    const totalPrice = calculateTotalPrice();
    setTotalPrice(totalPrice);
  };

  const removeFromCart = (villaId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[villaId] > 1) {
        updatedCart[villaId] -= 1;
      } else {
        delete updatedCart[villaId];
      }
      return updatedCart;
    });
  };

  const removeItemFromCart = (villaId) => {
    setCartItems((prev) => {
        const updatedCart = { ...prev };
        updatedCart[villaId] = 0;
        return updatedCart;
    });
};

const calculateTotalPrice = () => {
  let totalPrice = 0;
  for (const villaId in cartItems) {
    const villa = villas.find((villa) => villa.id === parseInt(villaId));
    if (villa) {
      totalPrice += cartItems[villaId] * villa.dailyRent;
    }
  }
  return totalPrice;
};

const calculateBookingCount = () => {
    let bookingCount = 0;
    for (const villaId in cartItems) {
        bookingCount += cartItems[villaId];
    }
    return bookingCount;
};


  const contextValue = { cartItems, addToCart, removeFromCart , calculateTotalPrice, calculateBookingCount,
    removeItemFromCart
  
  };

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  );
};
