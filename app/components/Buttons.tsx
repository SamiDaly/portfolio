type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition";

  const styles = {
    primary: "bg-black text-white hover:opacity-80",
    outline: "border border-black hover:bg-black hover:text-white",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
