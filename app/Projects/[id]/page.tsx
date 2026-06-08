import Image from "next/image";
import Link from "next/link";
import { getProjectById } from "@/lib/projects";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetails({ params }: Props) {
  const { id } = await params;
  //const params = useParams(); ????????

  const project = getProjectById(id);

  if (!project) {
    return (
      <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="text-center">
          <Link href="/projects" className="text-white hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white py-10 px-4">
      <div className="absolute inset-0 bg-linear-to-br from-sky-500/10 via-transparent to-fuchsia-500/10 pointer-events-none" />
      <Link href="/projects" className="absolute top-6 left-6 z-10 text-white hover:text-slate-300">
        ← Back
      </Link>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="rounded-4xl border border-slate-700/70 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <h1 className="text-4xl font-bold mb-6 text-center sm:text-left">{project.title}</h1>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr] items-start">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl bg-slate-800 shadow-inner shadow-black/20">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  width={1200}
                  height={700}
                  className="h-full w-full min-h-[18rem] object-cover"
                />
              </div>

              <p className="text-slate-300 leading-relaxed">// Sami Daly</p>
            </div>

            <div className="space-y-6 rounded-3xl bg-slate-950/90 border border-slate-700 p-6 shadow-lg shadow-slate-950/20">
              <div>
                <h2 className="text-2xl font-semibold mb-3">Project details</h2>
                <p className="text-slate-400">Use the GitHub Link to see the project code.</p>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
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
