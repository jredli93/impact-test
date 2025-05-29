import { auth } from '@/libs/auth';
import HeaderClient from '@/app/(unauth)/components/header/HeaderClient';

export default async function Header() {
  const session = await auth();
  return <HeaderClient session={session} />;
}
