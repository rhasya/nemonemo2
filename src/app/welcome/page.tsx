import Sidebar from '@/components/Sidebar';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'; // Import redirect

export default function WelcomePage() {
  const cookieStore = cookies();
  const userCookie = cookieStore.get('user'); // Check for 'user' cookie

  if (!userCookie) {
    redirect('/login'); // Redirect to /login if cookie is not found
  }

  // If cookie exists, proceed to render the page
  // console.log('User cookie found:', userCookie.value); // Optional: keep for server-side logging if desired

  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to our service!</h1>
        <p>This is the main content area. We are glad to have you here.</p>
        {/* Debugging indicator removed */}
      </main>
    </div>
  );
}
