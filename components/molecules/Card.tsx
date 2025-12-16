import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={[
        "rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
        className,
      ].join(" ")}
      {...props}
    >
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>
      )}
      {children}
    </div>
  );
};
