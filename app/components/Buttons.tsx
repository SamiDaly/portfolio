"use client";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  target?: string;
  rel?: string;
  onclick?: () => void;
};

export default function Button({ children, variant = "primary", href, target, rel, onclick }: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition-all duration-200";

  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black hover:bg-black hover:text-white",
  };

  const className = `${base} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onclick}>
      {children}
    </button>
  );
}
