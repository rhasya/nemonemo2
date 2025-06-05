export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-200 p-4 h-screen"> {/* Added h-screen */}
      <p className="font-bold text-lg mb-4">Sidebar</p>
      <ul>
        <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-700">Link 1</a></li>
        <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-700">Link 2</a></li>
        <li className="mb-2"><a href="#" className="text-blue-500 hover:text-blue-700">Link 3</a></li>
      </ul>
    </div>
  );
}
