// SEMENTARA: Bypass login untuk testing CRUD
export async function getAuthenticatedUser() {
  return {
    id: 1,
    fullname: "Administrator",
    email: "admin@example.com",
    role: "admin",
  }
}

/* --- KODE PATOKAN ASLI (Uncomment setelah selesai tes CRUD) ---
import { cookies } from "next/headers"
import { prisma } from "@/lib/prisma"
import { verifyUserJwt } from "@/lib/user-security"
 
export async function getAuthenticatedUser() {
  const token = (await cookies()).get("auth_token")?.value
  if (!token) return null
 
  const payload = verifyUserJwt(token)
  if (!payload) return null
 
  const userId = Number(payload.sub)
  if (!Number.isSafeInteger(userId) || userId < 1) return null
 
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, fullname: true, email: true, role: true, token: true },
  })
  if (!user || user.token !== token) return null
 
  const { token: _token, ...authenticatedUser } = user
  return authenticatedUser
}
*/