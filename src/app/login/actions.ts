"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const cookieStore = await cookies();

  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;

  if (username === "snow" && password === "xyz") {
    // Set cookie
    if (username) {
      cookieStore.set("user", username, {
        httpOnly: true,
        path: "/",
        secure: process.env.mode !== "development",
      });
    }
    // Redirect to welcome page
    redirect("/welcome");
  } else {
    return { success: false, message: "Invalid username or password." };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("user");
  redirect("/");
}
