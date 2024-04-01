import DeleteAccountButton from "@/components/DeleteAccountButton";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";

export default async function Home() {
  const user = null;

  return (
    <>
      {user ? (
        <>
          <p className="mb-4">Logged in</p>

          <SignOutButton />

          <DeleteAccountButton userId={"userId"} />
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
