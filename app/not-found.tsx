import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested does not exist.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-neutral px-6 py-20">
      <div className="mx-auto w-full max-w-md text-center">
        <p className="text-label font-medium text-secondary">404</p>
        <h1 className="mt-2 text-h2 font-medium tracking-tight text-primary">
          Page not found
        </h1>
        <p className="mt-4 text-body-lg text-secondary">
          This URL isn&apos;t part of the site. You can return to the homepage
          and jump to a section from there.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-md bg-primary px-[22px] py-2.5 text-body-sm font-medium text-surface transition-colors duration-150 ease-in-out hover:bg-tertiary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
