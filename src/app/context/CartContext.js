// context/CartContext.js
"use client";
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return action.payload;
    case 'UPDATE_CART':
      return action.payload;
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

let storedCart;

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], (initial) => {
    
      try {
        if (typeof window !== "undefined") {
        storedCart = localStorage.getItem('cart');
        }
        return storedCart ? JSON.parse(storedCart) : initial;
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        return initial;
      } 
  });
  const [quantities, setQuantities] = useState(() => {
    if (typeof window !== "undefined") {
    const storedQuantities = localStorage.getItem('quantities');
    return storedQuantities ? JSON.parse(storedQuantities) : {};
    }
  });
  const [subtotal, setSubtotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
    localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    if (typeof window !== "undefined") {
    localStorage.setItem('quantities', JSON.stringify(quantities));
    }
  }, [quantities]);

  useEffect(() => {
    const newSubtotal = cart.reduce((acc, item) => {
      const quantity = quantities[item.id] || item.quantity || 1;
      return acc + item.price * quantity;
    }, 0);
    setSubtotal(newSubtotal);
  }, [quantities, cart]);

  const addToCart = (item, additionalInfo, quantity) => {
    const existingCartItemIndex = cart.findIndex((cartItem) => String(cartItem.id) === String(item.id));

    if (existingCartItemIndex !== -1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: quantity || 1,
      }));

      dispatch({
        type: 'UPDATE_CART',
        payload: cart.map((cartItem) =>
          String(cartItem.id) === String(item.id)
            ? {
                ...cartItem,
                quantity: quantity || 1,
                additionalInfo: additionalInfo || cartItem.additionalInfo,
              }
            : cartItem
        ),
      });
    } else {
      dispatch({
        type: 'ADD_TO_CART',
        payload: [
          ...cart,
          {
            ...item,
            quantity: quantity || 1,
            additionalInfo: additionalInfo || {},
          },
        ],
      });

      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: quantity || 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    setQuantities((prevQuantities) => {
      const { [itemId]: removedItem, ...newQuantities } = prevQuantities;
      return newQuantities;
    });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    setQuantities({});
    if (typeof window !== "undefined") {
    localStorage.removeItem('cart');
    localStorage.removeItem('quantities');
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, quantities, subtotal, isModalOpen, toggleModal }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
