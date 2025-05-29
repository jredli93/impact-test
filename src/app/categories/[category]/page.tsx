import { notFound } from 'next/navigation';
import Image from 'next/image';
import classes from '@/app/categories/[category]/CategoryCard.module.css'
import AddToCart from '@/app/components/ui/AddToCart/AddToCart';
import { auth } from '@/libs/auth';

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const session = await auth();

  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`, {
    cache: 'no-store',
  });

  if (!res.ok) return notFound();

  const products = await res.json();

  return (
      <div className={classes.Container}>
      <h1 className={classes.PageTitle}>{decodeURIComponent(category)} ({ products.length })</h1>
        <div className={classes.CategoryCardsWrapper}>
          {products.map(product => (
            <div className={classes.Card} key={product.id}>
              <Image src={product.image} alt={product.title} width={70} height={70} />
              <h1 className={classes.Title}>{product.title}</h1>
              <p className={classes.Price}>${product.price}</p>
              {session && <AddToCart product={product} />}
            </div>
          ))}
        </div>
      </div>
  )
}
