import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black px-6 py-20">
      {/* Hero Section */}
      <div className="max-w-3xl text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Welcome to <span className="text-blue-600">Flowtooly</span>
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          A collection of simple, fast, and free online tools for your daily
          tasks. Convert, create, calculate, and manage everything — all in one
          place.
        </p>

        {/* CTA Button */}
        <Link
          href="/tools"
          className="mt-4 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow hover:bg-blue-700 transition"
        >
          Explore Tools
        </Link>
      </div>

      {/* Footer Mini */}
      <footer className="mt-20 text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Flowtooly. All rights reserved.
      </footer>
    </div>
  );
}
