'use client';

import React from 'react';
import classes from '@/app/cart/Cart.module.css';
import { useCart } from '../../context/CartContext';
import QuantitySelector from '../components/ui/QuantitySelector/QuantitySelector';

function Cart() {
  const { cartItems, totalPrice, removeFromCart, updateCartItemQuantity } = useCart();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const incrementQuantity = (id, currentQty) => {
    updateCartItemQuantity(id, currentQty + 1);
  };

  const decrementQuantity = (id, currentQty) => {
    if (currentQty > 1) {
      updateCartItemQuantity(id, currentQty - 1);
    }
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
              <QuantitySelector
                quantity={item.quantity}
                onIncrement={() => incrementQuantity(item.id, item.quantity)}
                onDecrement={() => decrementQuantity(item.id, item.quantity)}
              />
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
      <span className={classes.Price}>Total price: ${totalPrice.toFixed(2)}</span>
    </div>
  );
}

export default Cart;
