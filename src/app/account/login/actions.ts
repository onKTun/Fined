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
  console.log("login function called");
  const supabase = createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
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
  const supabase = createClient();

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
