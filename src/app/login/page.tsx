"use client";

import { loginAction } from "@/actions/users";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

function LoginPage() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickLoginButton = (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await loginAction(formData);
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success("Logged in");
        router.push("/");
      }
    });
  };

  return (
    <div>
      <form
        className="flex flex-col bg-emerald-700 w-96 p-8 rounded-lg gap-y-4"
        action={handleClickLoginButton}
      >
        <h1 className="text-4xl text-center mb-8">Login</h1>

        <input
          type="text"
          name="email"
          className="rounded-lg p-2 text-black"
          placeholder="Email"
          disabled={isPending}
        />
        <input
          type="password"
          name="password"
          className="rounded-lg p-2 text-black"
          placeholder="Password"
          disabled={isPending}
        />

        <button
          className="bg-black rounded-lg p-2 mt-4 mb-2"
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Login"}
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link href="/create-account" className="underline">
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
