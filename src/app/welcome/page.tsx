import Sidebar from "@/components/Sidebar"; // Assuming Sidebar component exists as per original file
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Make the component an async function
export default async function WelcomePage() {
  const cookieStore = await cookies(); // Removed await, cookies() is not a promise
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    redirect("/login");
    // return null; // Or handle redirect appropriately, redirect() throws an error
  }

  // If userCookie exists, its value is the username
  const username = userCookie.value;

  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="flex-grow p-8">
        <h1 className="mb-4 text-3xl font-bold">Welcome, {username}!</h1>
        <p>This is the main content area. We are glad to have you here.</p>
      </main>
    </div>
  );
}
