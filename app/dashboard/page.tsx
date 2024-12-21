"use client";

import React, { useState } from "react";
import Navbar from "@/components/ui/dsahboard-navbar";
import { Dashboard } from "../../components/dashboard"; // Ensure correct path
import useAuthStore from "@/hooks/user-auth-store";

const DashboardPage = () => {
  const [activeSection, setActiveSection] = useState("#discover");
  const { user } = useAuthStore();
  // const id = user?.id;
  const userId = user?.id ?? ""; // Replace with actual logic to get the current user ID

  return (
    <div className="">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div>
        <Dashboard activeSection={activeSection} userId={userId} />
      </div>
    </div>
  );
};

export default DashboardPage;
