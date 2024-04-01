"use client";

import { createAccountAction } from "@/actions/users";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

function CreateAccountPage() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickCreateAccountButton = (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await createAccountAction(formData);
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success("Verification email sent");
        router.push("/");
      }
    });
  };

  return (
    <div>
      <form
        className="flex flex-col bg-emerald-700 w-96 p-8 rounded-lg gap-y-4"
        action={handleClickCreateAccountButton}
      >
        <h1 className="text-4xl text-center mb-8">Create Account</h1>

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
          {isPending ? "Creating Account..." : "Create Account"}
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default CreateAccountPage;
