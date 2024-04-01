"use client";

import Link from "next/link";

function LoginPage() {
  const handleClickLoginButton = (formData: FormData) => {};

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
        />
        <input
          type="password"
          name="password"
          className="rounded-lg p-2 text-black"
          placeholder="Password"
        />

        <button className="bg-black rounded-lg p-2 mt-4 mb-2">Login</button>

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
