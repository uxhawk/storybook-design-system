import React from "react";
import { Navbar } from "../organisms/Navbar";

export interface DashboardTemplateProps {
  children: React.ReactNode;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  children,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        brand="MyApp"
        links={[
          { label: "Home", href: "#" },
          { label: "Settings", href: "#" },
        ]}
      />
      <main className="mx-auto max-w-7xl p-6">{children}</main>
    </div>
  );
};
