"use server";

export const loginAction = async (formData: FormData) => {
  try {
    return { errorMessage: null };
  } catch (error) {
    let errorMessage = "An error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { errorMessage };
  }
};

export const signOutAction = async () => {
  try {
    return { errorMessage: null };
  } catch (error) {
    let errorMessage = "An error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { errorMessage };
  }
};

export const createAccountAction = async (formData: FormData) => {
  try {
    return { errorMessage: null };
  } catch (error) {
    let errorMessage = "An error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { errorMessage };
  }
};

export const deleteAccountAction = async (userId: string) => {
  try {
    return { errorMessage: null };
  } catch (error) {
    let errorMessage = "An error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { errorMessage };
  }
};
