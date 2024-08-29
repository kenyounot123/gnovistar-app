import { GnovistarSidebar } from "./components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <GnovistarSidebar>
        {children}
    </GnovistarSidebar>
  );
}