import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  GraduationCap,
  ChartBarStacked,
  FileText,
  SquareUser,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0 [&>div]:bg-gradient-to-b [&>div]:from-[#d4af37] [&>div]:via-[#aa771c] [&>div]:to-[#805510] [&>div]:text-white [&>div]:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
      {/* Container utama dengan gradasi emas dan efek glow bayangan keemasan */}
      <div className="flex h-full w-full flex-col bg-gradient-to-b from-[#d4af37] via-[#aa771c] to-[#805510] text-white shadow-[0_0_25px_rgba(212,175,55,0.4)]">
        
        {/* Header Logo dengan sedikit efek glow pada logo */}
        <SidebarHeader className="p-4 bg-transparent">
          <div className="flex items-center justify-center gap-3 px-3 py-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            <Image
              src="/img/smk_mvp_ars_logo_white.png"
              alt="SMK MVP ARS"
              width={200}
              height={200}
              className="w-auto h-auto max-h-12 object-contain"
              priority
            />
          </div>
        </SidebarHeader>

        {/* Content Menu */}
        <SidebarContent className="bg-transparent">
          <SidebarGroup>
            <SidebarGroupLabel className="text-white/90 text-xs font-semibold px-2 mb-2 tracking-wider">
              Menu Utama
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Dashboard */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-white/25 hover:text-white hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] active:bg-white/30 transition-all duration-300"
                  >
                    <Link href="/admin">
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* User Management */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-white/25 hover:text-white hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] active:bg-white/30 transition-all duration-300"
                  >
                    <Link href="/admin/usermanagement">
                      <UsersRound className="w-4 h-4 mr-2" />
                      <span>usermanagement</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Category */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-white/25 hover:text-white hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] active:bg-white/30 transition-all duration-300"
                  >
                    <Link href="/admin/category">
                      <ChartBarStacked className="w-4 h-4 mr-2" />
                      <span>Category</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Jurusan */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-white/25 hover:text-white hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] active:bg-white/30 transition-all duration-300"
                  >
                    <Link href="/admin/jurusan">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span>Jurusan</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Artikel */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-white/25 hover:text-white hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] active:bg-white/30 transition-all duration-300"
                  >
                    <Link href="/admin/artikel">
                      <FileText className="w-4 h-4 mr-2" />
                      <span>Artikel</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Profile */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-white/25 hover:text-white hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] active:bg-white/30 transition-all duration-300"
                  >
                    <Link href="/admin/profile">
                      <SquareUser className="w-4 h-4 mr-2" />
                      <span>Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="bg-transparent" />
      </div>
    </Sidebar>
  );
}