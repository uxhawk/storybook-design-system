import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "info" | "success" | "warning" | "error";
}

const baseClasses =
  "inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide";

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  info: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "info",
  className = "",
  children,
  ...props
}) => {
  const classes = [baseClasses, variantClasses[variant], className].join(" ");
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
