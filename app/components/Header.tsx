"use client";
import Image from "next/image";
import Button from "./Buttons";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";

export default function Header() {
  const router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className=" relative w-full min-h-[60vh] flex items-center justify-between px-10 theme-header">
      <Image
        src="/next.svg"
        alt="background"
        fill
        className="object-cover object-[50%_20%] opacity-5 pointer-events-none z-0"
      />
      <div className="max-w-xl relative z-10">
        <p className="theme-text text-lg mb-2">Frontend Developer</p>
        <h1 className="theme-text text-5xl font-semibold leading-tight">Sami Daly</h1>
        <p className="mt-6 theme-text text-lg leading-relaxed">
          I enjoy building frontend applications with React and Next.js, and exploring how AI can improve development
          and code quality. I also have experience with structured teamwork and backend basics, and I like working
          towards clear goals and well-defined plans.
        </p>

        <div className="mt-8 flex gap-4">
          <Button onclick={() => router.push("/projects")}>View Projects</Button>

          <Button onclick={() => window.open("https://github.com/SamiDaly", "_blank", "noopener,noreferrer")}>
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
      <div className="shrink-0 relative z-10">
        <Image
          src="/samidaly-1.png"
          alt="sami"
          width={320}
          height={420}
          className="rounded-2xl object-cover shadow-lg"
        />
      </div>
    </header>
  );
}
