'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import classes from '@/app/(unauth)/components/ui/AddToCart/AddToCart.module.css';
import QuantitySelector from '@/app/(unauth)/components/ui/QuantitySelector/QuantitySelector';

export default function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { cartItems, addToCart, updateCartItemQuantity } = useCart();

  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      updateCartItemQuantity(product.id, existingItem.quantity + quantity);
    } else {
      const item = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity,
      };
      addToCart(item);
    }

    setQuantity(1);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  return (
    <div className={classes.CartWrapper}>
      <QuantitySelector
        quantity={quantity}
        onIncrement={incrementQuantity}
        onDecrement={decrementQuantity}
      />
      <button className={classes.Add} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
