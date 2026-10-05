import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {/* Tambahkan class w-full flex-1 overflow-x-hidden di tag main */}
      <main className="w-full flex-1 overflow-x-hidden">
        <SidebarInset />
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
