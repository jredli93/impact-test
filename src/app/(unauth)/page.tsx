import Categories from '@/app/categories/Categories';
import { auth } from '@/libs/auth';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Index page',
  description: 'Description of the index page',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // ... add more open graph meta tags
  },
};

export default async function IndexPage() {
  return (
    <div>
      <Categories/>
    </div>
  );
}
