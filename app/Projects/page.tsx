import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function ProjectPage() {
  return (
    <section className="relative min-h-screen w-full bg-slate-950 text-white py-10 px-4 sm:px-6 lg:px-10">
      <Link href="/" className="absolute top-6 left-6 z-10 text-white hover:text-slate-200">
        ← Back
      </Link>

      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="max-w-2xl text-slate-300">
            Browse my recent work. Click a project card to open the full product page and see the screenshots in a clean
            layout.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <Link href={`/projects/${project.id}`} className="block">
                <div className="relative overflow-hidden rounded-t-3xl">
                  <Image
                    src={encodeURI(project.imageUrl)}
                    alt={project.title}
                    width={600}
                    height={380}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-3 p-6">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                </div>
              </Link>

              <div className="border-t border-slate-800 px-6 py-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
