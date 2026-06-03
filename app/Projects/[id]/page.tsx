"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectById } from "@/lib/projects";

export default function ProjectDetails() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Link href="/projects" className=" text-black hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full bg-slate-950 text-white py-8 px-4">
      <Link href="/projects" className="absolute top-6 left-6 text-white hover:text-slate-300 z-10">
        ← Back
      </Link>

      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 shadow-2xl shadow-slate-950/40">
          <h1 className="text-4xl font-bold mb-6 text-center">{project.title}</h1>

          <div className="grid gap-8 lg:grid-cols-[1fr_350px] items-start">
            <div className="rounded-3xl overflow-hidden bg-slate-800">
              <Image
                src={encodeURI(project.imageUrl)}
                alt={project.title}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-slate-300">This project shows a modern UI, responsive layouts, and clear navigation. Use the GitHub link below to explore the full source.</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
