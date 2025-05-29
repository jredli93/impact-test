'use client';

import React, { useEffect, useState } from 'react';
import classes from '@/app/cart/Cart.module.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return (
      <div className={classes.CartWrapper}>
        <h1 className={classes.Title}>Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className={classes.CartWrapper}>
      <h1 className={classes.Title}>Cart</h1>
      <div className={classes.CartItems}>
        {cartItems.map(item => (
          <div className={classes.CartItem} key={item.id}>
            <img src={item.image} className={classes.Image} alt={item.title} />
            <div className={classes.CartItemData}>
              <h2 className={classes.CartItemDataTitle}>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <img
                className={classes.Remove}
                width={25}
                src="/assets/images/delete.svg"
                alt="Remove item"
                onClick={() => handleRemove(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
