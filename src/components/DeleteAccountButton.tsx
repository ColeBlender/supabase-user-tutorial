"use client";

import { deleteAccountAction } from "../../src-tutorial/actions/users";
import { useTransition } from "react";
import toast from "react-hot-toast";

type Props = {
  userId: string;
};

function DeleteAccountButton({ userId }: Props) {
  const [isPending, startTransition] = useTransition();

  const handleClickDeleteAccountButton = async () => {
    startTransition(async () => {
      const { errorMessage } = await deleteAccountAction(userId);
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success("Account deleted");
      }
    });
  };

  return (
    <button
      onClick={handleClickDeleteAccountButton}
      className="bg-emerald-700 w-56 py-2 rounded-lg mt-4"
    >
      {isPending ? "Deleting Account..." : "Delete Account"}
    </button>
  );
}

export default DeleteAccountButton;
