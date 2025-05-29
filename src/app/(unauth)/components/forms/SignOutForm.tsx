import { signOut } from '@/libs/auth';
import classes from '@/app/(unauth)/components/forms/SignOutForm.module.css'

export default function SignOutForm() {
  return (
    <form
      action={async () => {
        'use server';

        await signOut({ redirectTo: '/' });
      }}
    >
      <button type="submit" className={classes.SignOut}>
        Sign Out
      </button>
    </form>
  );
}
