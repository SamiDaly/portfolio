"use client";
import Image from "next/image";
import Button from "./Buttons";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (pathname?.startsWith("/projects")) {
    return null;
  }

  return (
    <header className="relative w-full min-h-screen overflow-hidden theme-header">
      <div className="absolute inset-0 bg-linear-to-br from-slate-100/90 via-white/80 to-slate-200/90 dark:from-slate-950/85 dark:via-slate-900/85 dark:to-slate-800/90" />
      <Image
        src="/next.svg"
        alt="background"
        fill
        className="object-cover object-[50%_20%] opacity-10 pointer-events-none z-0"
      />

      <div className="relative z-10 flex min-h-screen flex-col-reverse gap-10 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-2xl">
          <p className="theme-text text-lg font-medium mb-3">Frontend Developer</p>
          <h1 className="theme-text text-5xl md:text-6xl font-semibold leading-tight">Sami Daly</h1>
          <p className="mt-6 theme-text text-lg leading-relaxed max-w-2xl">
            I enjoy building frontend applications with React and Next.js, and exploring how AI can improve development
            and code quality. I also have experience with structured teamwork and backend basics, and I like working
            towards clear goals and well-defined plans.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-black text-white hover:bg-gray-800"
            >
              View Projects
            </Link>
            <Button href="https://github.com/SamiDaly" target="_blank" rel="noopener noreferrer">
              Github
            </Button>

            <button
              onClick={toggleTheme}
              className="px-4 py-2 border rounded theme-button transition-colors duration-200"
            >
              {theme === "light" ? "Switch to dark" : "Switch to light"}
            </button>
          </div>
        </div>

        <div className="relative z-10 flex w-full justify-center lg:w-auto">
          <Image
            src="/samidaly-1.png"
            alt="sami"
            width={360}
            height={480}
            className="max-w-full rounded-4xl object-cover shadow-[0_30px_90px_rgba(15,23,42,0.3)]"
          />
        </div>
      </div>
    </header>
  );
}
