"use client";

type Props = {
  userId: string;
};

function DeleteAccountButton({ userId }: Props) {
  const handleClickDeleteAccountButton = async () => {};

  return (
    <button
      onClick={handleClickDeleteAccountButton}
      className="bg-emerald-700 w-56 py-2 rounded-lg mt-4"
    >
      Delete Account
    </button>
  );
}

export default DeleteAccountButton;
