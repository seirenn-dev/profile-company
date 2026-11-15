import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Home, 
  Menu, 
  User, 
  HelpCircle 
} from "lucide-react"

export function getIconComponent(iconName: string) {
  // Membersihkan spasi berlebih karena ada typo " dasboard" di app-sidebar.tsx
  const normalizedName = iconName.trim().toLowerCase()

  switch (normalizedName) {
    case "dasboard":
    case "dashboard":
      return LayoutDashboard
    case "users":
      return Users
    case "settings":
      return Settings
    case "home":
      return Home
    case "menu":
      return Menu
    case "user":
      return User
    default:
      return HelpCircle // Ikon default jika tidak ditemukan
  }
}