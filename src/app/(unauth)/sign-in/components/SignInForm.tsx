import { signIn } from '@/libs/auth';
import classes from '@/app/(unauth)/sign-in/components/SignInForm.module.css'

export default function SignInForm() {
  return (
    <div>
      <form
        action={async () => {
          'use server';

          await signIn('google', { redirectTo: '/' });
        }}
      >
        <button className={classes.SignIn} type="submit">
          Sign in with Google
        </button>
      </form>
    </div>
  );
}
