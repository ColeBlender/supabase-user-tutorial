"use client";

import { resetPasswordAction } from "@/actions/users";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

export default function ResetPassword() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const code = searchParams.get("code") as string;

  const errorDescription = searchParams.get("error_description");

  const handleClickResetPasswordButton = (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await resetPasswordAction(code, formData);
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success("Password updated successfully.");
        router.push("/");
      }
    });
  };

  if (!code) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-center">
          <p className="text-2xl font-bold">Missing Param</p>
          <p>
            The link you followed is either invalid or missing a necessary
            param.
          </p>
        </div>
      </div>
    );
  }

  if (errorDescription) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-center">
          <p className="text-2xl font-bold">Error</p>
          <p>{decodeURIComponent(errorDescription)}</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <form
        className="flex flex-col bg-emerald-700 w-96 p-8 rounded-lg gap-y-4"
        action={handleClickResetPasswordButton}
      >
        <h1 className="text-4xl text-center mb-8">Reset Password</h1>

        <input
          type="password"
          name="password"
          className="rounded-lg p-2 text-black"
          placeholder="New Password"
          disabled={isPending}
        />

        <button
          className="bg-black rounded-lg p-2 mt-4 mb-2"
          disabled={isPending}
        >
          {isPending ? "..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
