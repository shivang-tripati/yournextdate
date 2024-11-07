"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/dsahboard-navbar";
import DashboardPage from "./page"; // Ensure correct path
import useAuthStore from "@/hooks/user-auth-store";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState("#discover");
  const { user } = useAuthStore();
  const id = user?.id;
  const userId = "106ec58c-02eb-4c59-bade-287f6c37f09e"; // Replace with actual logic to get the current user ID

  return (
    <div className="">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div>
        <DashboardPage activeSection={activeSection} userId={userId} />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
