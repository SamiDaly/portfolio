import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function ProjectPage() {
  return (
    <section className="w-full min-h-screen bg-slate-100 px-8 py-12">
      <Link href="/" className="absolute top-6 left-6 text-black hover:text-amber-950 z-10">
        ← Back
      </Link>

      {projects.map((project) => (
        <div key={project.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
          <Link href={`/projects/${project.id}`} className="block">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={encodeURI(project.imageUrl)}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-56 object-cover"
              />
            </div>

            <h2 className="font-semibold group-hover:text-blue-600 transition">{project.title}</h2>
          </Link>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-lg bg-black text-white hover:opacity-80"
          >
            github
          </a>
        </div>
      ))}
    </section>
  );
}
