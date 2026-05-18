import AdminSidebar from "@/components/AdminSidebar";

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 bg-white">{children}</div>
    </div>
  );
}
