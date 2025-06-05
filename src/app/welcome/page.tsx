import Sidebar from '@/components/Sidebar'; // Assuming Sidebar component exists as per original file
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link'; // Adding Link for completeness if needed, though not in original file.

// Make the component an async function
export default async function WelcomePage() {
  const cookieStore = cookies(); // Removed await, cookies() is not a promise
  const userCookie = cookieStore.get('user');

  if (!userCookie) {
    redirect('/login');
    // return null; // Or handle redirect appropriately, redirect() throws an error
  }

  // If userCookie exists, its value is the username
  const username = userCookie.value;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Welcome, {username}!
        </h1>
        <p className="mb-6 text-gray-600">
          We're glad to have you here. This page is a placeholder.
        </p>
        <p className="mb-2 text-sm text-gray-500">
          (The original page structure included a Sidebar and different layout,
          this version is simplified to focus on the welcome message as per the immediate subtask,
          while retaining the cookie check and redirect logic from the pre-existing file.)
        </p>
        {/* If Sidebar and original layout were intended to be kept, the JSX would be:
        <div className="flex flex-row">
          <Sidebar />
          <main className="flex-grow p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome, {username}!</h1>
            <p>This is the main content area. We are glad to have you here.</p>
          </main>
        </div>
        */}
        <Link href="/login" className="mt-4 text-blue-500 hover:text-blue-700">
          Go to Login page
        </Link>
      </div>
    </div>
  );
}
