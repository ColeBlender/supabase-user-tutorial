import DeleteAccountButton from "@/components/DeleteAccountButton";
import SignOutButton from "@/components/SignOutButton";
import { getUser } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  const user = await getUser();

  return (
    <>
      {user ? (
        <>
          <p className="mb-4">Logged in as {user.email}</p>

          <SignOutButton />

          <DeleteAccountButton userId={user.id} />
        </>
      ) : (
        <>
          <p className="mb-4">Not logged in</p>
          <Link
            href="/login"
            className="bg-emerald-700 py-2 text-center rounded-lg w-56"
          >
            Login
          </Link>

          <Link
            href="/forgot-password"
            className="bg-emerald-700 py-2 text-center rounded-lg w-56 mt-4"
          >
            Forgot Password
          </Link>
        </>
      )}

      <Link
        href="/protected"
        className="bg-emerald-700 py-2 text-center rounded-lg w-56 mt-4"
      >
        Go to protected page
      </Link>
    </>
  );
}
