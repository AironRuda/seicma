import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "outline" | "white";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  showArrow = true,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-accent-green text-white hover:bg-accent-green/90 shadow-lg hover:shadow-xl",
    outline: "border-2 border-white text-white hover:bg-white hover:text-primary-dark",
    white: "bg-white text-primary-dark hover:bg-neutral-light shadow-lg hover:shadow-xl",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const arrow = showArrow ? (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  ) : null;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {arrow}
    </button>
  );
}
