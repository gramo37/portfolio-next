"use client";

import { SidebarProvider } from "./Sidebar/sidebar-context";
import Sidebar, { SidebarInset } from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="relative min-h-screen bg-background">
        <Sidebar />
        <SidebarInset>{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
}
