import Image from "next/image";
import Button from "./Buttons";

export default function Header() {
  return (
    <header className="w-full min-h-[60vh] flex items-center justify-between px-10 bg-[#fdf6e3]">
      <Image src="/next.svg" alt="background" fill className="object-cover object-[50%_20%] opacity-5" />
      <div className="max-w-xl">
        <p className="text-gray-600 text-lg mb-2">Frontend Developer</p>
        <h1 className="text-5xl font-semibold leading-tight">Sami Daly</h1>
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          I build modern, fast and clean web applications using React, Next.js and TypeScript. Focused on UI,
          performance and user experience.
        </p>
        <div className="mt-8 flex gap-4">
          <Button variant="primary">View Projects</Button>
          <Button variant="outline">Contact</Button>
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src="/samidaly (1).png"
          alt="sami"
          width={320}
          height={420}
          className="rounded-2xl object-cover shadow-lg"
        />
      </div>
    </header>
  );
}
