import classes from '@/app/(unauth)/categories/Categories.module.css'
import Link from 'next/link';

export default async function Categories() {
    const res = await fetch('https://fakestoreapi.com/products/categories', {
        cache: 'no-store',
    });
    const categories: string[] = await res.json();

    return (
        <div className={classes.CategoriesWrapper}>
            <h1 className={classes.Categories}>Categories</h1>
            <div className={classes.CategoryCards}>
                {categories.map((category, index) => (
                    <div className={classes.CategoryCard} key={index}>
                        <Link href={`/categories/${encodeURIComponent(category)}`}>{category}</Link>
                    </div>
                ))}
            </div>
        </div>  
    );
}
