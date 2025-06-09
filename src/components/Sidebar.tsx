import { logoutAction } from "@/app/login/actions";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-200 p-4 h-screen"> {/* Added h-screen */}
      <p className="font-bold text-lg mb-4">Sidebar</p>
      <ul>
        <li className="mb-2"><a href="/list" className="text-blue-500 hover:text-blue-700">List</a></li>
        <li className="mb-2">
          <form action={logoutAction}>
            <button type="submit" className="text-blue-500 hover:text-blue-700">
              Sign Out
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
}
