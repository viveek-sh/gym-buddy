"use client";
import Link from "next/link";
import { Home, ArrowLeft, Compass } from "lucide-react";
import Image from "next/image";

export default function Custom404() {
  return (
    <main className="relative min-h-[75vh] overflow-hidden bg-zinc-950">
      {/* subtle background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:44px_44px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      <div className="container max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-sm tracking-wider text-zinc-400">ERROR</p>
        <h1 className="mt-1 text-5xl font-semibold tracking-tight text-zinc-100">
          404 - Page not found
        </h1>
        <p className="mt-3 text-zinc-400">
          We’re still building parts of the site, so the page you’re trying to
          reach might be coming soon or may have moved.
        </p>

        {/* Illustration slot */}
        <div className="mx-auto mt-10 w-full max-w-xl ">
          <Image
            src="https://gymbuddy.cdn.viveksahu.dev/images/404.svg"
            alt="404 illustration"
            width={1280}
            height={720}
            className="mx-auto"
          />
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-900 transition">
            <Home className="h-4 w-4" />
            Go home
          </Link>

          <button
            onClick={() =>
              window.history.length > 1
                ? window.history.back()
                : (window.location.href = "/")
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900/60 transition">
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          Or{" "}
          <Link
            href="/about#contact"
            className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4">
            Contact US
          </Link>
          .
        </div>
      </div>
    </main>
  );
}
