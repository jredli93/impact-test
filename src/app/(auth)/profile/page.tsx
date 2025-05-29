// app/profile/page.tsx
import { auth } from '@/libs/auth';
import Image from 'next/image';
import SignOutForm from '@/app/(unauth)/components/forms/SignOutForm';
import { redirect } from 'next/navigation';
import classes from '@/app/(auth)/profile/Profile.module.css'

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/sign-in');
  }

  const { name, email, image } = session.user;

  return (
    <div className={classes.ProfileWrapper}>
      <h1>Profile</h1>
      <div>
        {image && (
          <Image
            src={image}
            alt={name ?? 'User image'}
            width={180}
            height={180}
          />
        )}
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <SignOutForm />
      </div>
    </div>
  );
}
