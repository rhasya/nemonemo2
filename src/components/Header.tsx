import Link from "next/link";

const Header = () => {
  return (
    <header
      className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white"
      style={{ height: "60px" }}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">NemoNemo</Link>
        </div>
        <nav>
          <Link
            href="/login"
            className="rounded bg-white px-4 py-2 font-bold text-purple-700 hover:bg-gray-100"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
