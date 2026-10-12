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
    <Sidebar className="border-r-0 [&>div]:bg-blue-600 [&>div]:text-white">
      {/* Container utama diberi paksa bg-blue-600 lewat Arbitrary Variant Tailwind */}
      <div className="flex h-full w-full flex-col bg-blue-600 text-white">
        {/* Header Logo */}
        <SidebarHeader className="p-4 bg-blue-600">
          <div className="flex items-center justify-center gap-3 px-3 py-2">
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
        <SidebarContent className="bg-blue-600">
          <SidebarGroup>
            <SidebarGroupLabel className="text-white/80 text-xs font-semibold px-2 mb-2">
              Menu Utama
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Dashboard */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
                  >
                    <Link href="/admin">
                      <LayoutDashboard className="w-4 h-4 mr-2" />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
                  >
                    <Link href="/admin/usermanagement">
                      <UsersRound className="w-4 h-4 mr-2" />
                      <span>usermanagement</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* category */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
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
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
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
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
                  >
                    <Link href="/admin/artikel">
                      <FileText className="w-4 h-4 mr-2" />
                      <span>Artikel</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Pengaturan */}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="text-white hover:bg-blue-700 hover:text-white active:bg-blue-800"
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

        <SidebarFooter className="bg-blue-900" />
      </div>
    </Sidebar>
  );
}
