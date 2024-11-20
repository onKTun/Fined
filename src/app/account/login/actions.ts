"use server";
//actions regarding login and signup
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "utils/supabase/server";
import {
  isEmailValid,
  isPasswordValid,
  isUsernameValid,
} from "utils/verification";

export async function login(formData: FormData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!isEmailValid(email) || !isPasswordValid(password)) {
    return "Email or password is not valid!";
  }

  const supabase = createClient();

  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log("Error details:", {
      message: error.message,
      status: error.status,
      statusText: error.status,
    });
    return error.message;
  }

  revalidatePath("/", "layout");
  redirect("/education/dashboard");
}

export async function signup(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const accountType = formData.get("account-type") as string;

  if (
    !isEmailValid(email) ||
    !isPasswordValid(password) ||
    !isUsernameValid(username) ||
    firstName === "" ||
    lastName === "" ||
    !accountType
  ) {
    redirect("/error");
  }
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email,
    password,
    options: {
      data: {
        username: username,
        first_name: firstName,
        last_name: lastName,
        account_type: accountType,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
    return error.message;
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function forgotPassword(formData: FormData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const email = formData.get("email") as string;

  if (!isEmailValid(email)) {
    return "Email is not valid.";
  }

  const supabase = createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://fined.academy/account/changepassword",
  });

  if (error) {
    console.log("Error details:", {
      message: error.message,
      status: error.status,
      statusText: error.status,
    });
    return error.message;
  }
}

export async function changePassword(formData: FormData) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const password = formData.get("password") as string;

  const valid = isPasswordValid(password);
  if (!valid) {
    let errorMessage = "";

    if (password.length < 8) {
      errorMessage += "Password must be at least 8 characters long.\n";
    }
    if (!/[A-Z]/.test(password)) {
      errorMessage += "Password must contain at least one uppercase letter.\n";
    }
    if (!/\d/.test(password)) {
      errorMessage += "Password must contain at least one number.\n";
    }
    if (!/[!_.-]/.test(password)) {
      errorMessage +=
        "Password must contain at least one special character (! , _ , . , -).\n";
    }

    return errorMessage;
  }

  const supabase = createClient();

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    console.log("Error details:", {
      message: error.message,
      status: error.status,
      statusText: error.status,
    });
    return error.message;
  }

  revalidatePath("/", "layout");
  redirect("/education/dashboard");
}
