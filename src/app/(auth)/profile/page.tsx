// app/profile/page.tsx
import { auth } from '@/libs/auth';
import Image from 'next/image';
import SignOutForm from '@/components/SignOutForm';
import { redirect } from 'next/navigation';

export default async function ProfilePage() {
  const session = await auth();

  // Redirect to login if not authenticated
  if (!session?.user) {
    redirect('/sign-in');
  }

  const { name, email, image } = session.user;

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-semibold mb-2">Profile</h1>
      <p className="text-zinc-400 mb-6">
        This page is protected. You can only see your own profile when signed in.
      </p>
      <div className="flex flex-col items-center gap-4">
        {image && (
          <Image
            src={image}
            alt={name ?? 'User image'}
            width={180}
            height={180}
            className="rounded-full border"
          />
        )}
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <SignOutForm />
      </div>
    </div>
  );
}
