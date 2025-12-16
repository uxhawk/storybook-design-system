import React from "react";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput: React.FC<TextInputProps> = ({
  className = "",
  ...props
}) => {
  const classes = [
    "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400",
    "focus:border-blue-500 focus:outline-none focus:ring-blue-500",
    className,
  ].join(" ");

  return <input type="text" className={classes} {...props} />;
};
