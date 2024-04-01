"use client";

import { signOutAction } from "../../src-tutorial/actions/users";
import { useTransition } from "react";
import toast from "react-hot-toast";

function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  const handleClickSignOutButton = async () => {
    startTransition(async () => {
      const { errorMessage } = await signOutAction();
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success("Signed out");
      }
    });
  };

  return (
    <button
      onClick={handleClickSignOutButton}
      className="bg-emerald-700 w-56 py-2 rounded-lg"
    >
      {isPending ? "Signing Out..." : "Sign Out"}
    </button>
  );
}

export default SignOutButton;
