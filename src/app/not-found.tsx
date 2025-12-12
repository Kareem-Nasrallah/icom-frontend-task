import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4 text-gray-600">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-xl bg-main text-white font-medium hover:bg-red-800 hover:scale-105 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
