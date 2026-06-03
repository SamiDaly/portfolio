"use client";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onclick?: () => void;
};

export default function Button({ children, variant = "primary", onclick }: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition-all duration-200";

  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black hover:bg-black hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onclick}>
      {children}
    </button>
  );
}
