'use client'

import { useRef, useState } from "react"
import { LogOut } from "lucide-react"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

export function LogoutMenuItem() {
  const isLoggingOutRef = useRef(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  async function logout() {
    if (isLoggingOutRef.current) return
    isLoggingOutRef.current = true
    setIsLoggingOut(true)

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        keepalive: true,
      })
    } finally {
      window.location.replace("/")
    }
  }

  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={isLoggingOut}
      onClick={() => {
        void logout()
      }}
    >
      <LogOut aria-hidden="true" />
      {isLoggingOut ? "Keluar..." : "Log out"}
    </DropdownMenuItem>
  )
}