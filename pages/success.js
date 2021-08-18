import Link from "next/link";

function success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-green-400">
      <h2 className="text-4xl font-semibold">Thanks for shopping with us!</h2>
      <Link href="/" className=" bg-white bg-opacity-30 px-4 py-2 rounded-2xl">
        Go to home page
      </Link>
    </div>
  );
}

export default success;
