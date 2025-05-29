'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(stored);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  const updateCartItemQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(p => p.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCartItemQuantity, totalPrice, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
