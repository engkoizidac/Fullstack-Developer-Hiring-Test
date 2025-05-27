import Link from "next/link";

export function Navbar() {
  return (
    <nav className="py-5 flex items-center sm:px-2 lg:px-4">
      <div className="flex items-center gap-10 ">
        <Link href="/">
          <h1 className="text-3xl font-semibold justify-between">
            Hiring<span className="text-fuchsia-800">Test</span>
          </h1>
        </Link>

        <div className="flex gap-8"></div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex pr-10 gap-8">
          <div className="hidden sm:flex items-center gap-6">
            <Link
              className="text-sm font-medium hover:text-fuchsia-800 transition-colors"
              href="/task1"
            >
              Task 1
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <Link
              className="text-sm font-medium hover:text-fuchsia-800 transition-colors"
              href="/task2"
            >
              Task 2
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <Link
              className="text-sm font-medium hover:text-fuchsia-800 transition-colors"
              href="/task3"
            >
              Task 3
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
