'use client';

import classes from '@/app/components/ui/QuantitySelector/QuantitySelector.module.css';

export default function QuantitySelector({ quantity, onIncrement, onDecrement }) {
  return (
    <div className={classes.Quantity}>
      <button onClick={onDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
