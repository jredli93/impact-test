'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import classes from '@/app/components/header/Header.module.css';

export default function HeaderClient({ session }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const total = storedCart.length;
    setCartCount(total);
  }, []);

  return (
    <nav className={classes.Nav}>
      <div className={classes.Container}>
        <div className={classes.Links}>
          <Link href="/" className={classes.Link}>Categories</Link>
        </div>
        <div className={classes.Right}>
          <Link href="/cart" className={classes.CartLink}>
            <Image src="/assets/images/cart.png" alt="Cart" width={24} height={24} />
            {cartCount > 0 && (
              <span className={classes.CartBadge}>{cartCount}</span>
            )}
          </Link>
          <div className="flex gap-3 justify-center">
            {session ? (
              <Link href="/profile" className="primary-btn">Profile</Link>
            ) : (
              <Link href="/sign-in" className="primary-btn">Sign in</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
