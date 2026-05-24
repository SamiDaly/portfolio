import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
};

export default function Button({ children, variant, href = "primary" }: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition-all duration-200";

  //handleclick im going to makr the button clickble , that click is going to display/direct tp Project-> page.tsx width all projects, and from there i can click on one picture for closer look [id] page/ and link to github code.
  const handleClick = ({ href }: ButtonProps) => {
    if (href) {
      return <Link href={`/projects/${project.id}`} />;
    } else {
      return <button />;
    }
  };

  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black hover:bg-black hover:text-white",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
