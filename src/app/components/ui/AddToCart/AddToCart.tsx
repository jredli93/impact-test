'use client';

import { useState } from 'react';
import classes from '@/app/components/ui/AddToCart/AddToCart.module.css';
import { getCart, saveCart } from '@/utils/cart';

export default function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const currentCart = getCart();
    const existingItemIndex = currentCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      currentCart[existingItemIndex].quantity += quantity;
    } else {
      currentCart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity
      });
    }

    saveCart(currentCart);
    console.log(`Added ${quantity} of ${product.title} to cart`);
  };

  return (
    <div className={classes.CartWrapper}>
      <div className={classes.Quantity}>
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
      <button className={classes.Add} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
