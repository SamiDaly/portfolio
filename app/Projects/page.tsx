import Button from "../components/Buttons";

export default function projectPage() {
  return (
    <>
      <div>
        {projects.map((project) => (
          <Button href={`/projects/${project.id}`}>View Project</Button>
        ))}
      </div>
    </>
  );
}
