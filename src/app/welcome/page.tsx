import Sidebar from '@/components/Sidebar';

export default function WelcomePage() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to our service!</h1>
        <p>This is the main content area. We are glad to have you here.</p>
      </main>
    </div>
  );
}
