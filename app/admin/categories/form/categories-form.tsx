'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type CategoriesFormProps = {
    categoryId?: string
}

export default function CategoriesForm({ categoryId }: CategoriesFormProps) {
    const router = useRouter()
    const isEditMode = Boolean(categoryId)

    const [name, setName] = useState("")
    const [isLoading, setIsLoading] = useState(isEditMode)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        if (!categoryId) return
        let isActive = true

        async function loadCategory() {
            setIsLoading(true)
            setError("")
            try {
                const response = await fetch(`/api/categories/${categoryId}`)
                const result = await response.json()
                if (!response.ok) throw new Error(result.error ?? "Gagal memuat data kategori.")
                if (isActive) {
                    setName(result.category.name ?? "")
                }
            } catch (loadError) {
                if (isActive) {
                    setError(loadError instanceof Error ? loadError.message : "Gagal memuat data kategori.")
                }
            } finally {
                if (isActive) setIsLoading(false)
            }
        }

        void loadCategory()
        return () => {
            isActive = false
        }
    }, [categoryId])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError("")

        const trimmedName = name.trim()
        if (!trimmedName) {
            setError("Nama kategori wajib diisi.")
            return
        }

        setIsSubmitting(true)
        try {
            const url = isEditMode ? `/api/categories/${categoryId}` : "/api/categories"
            const method = isEditMode ? "PATCH" : "POST"

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: trimmedName }),
            })
            const result = await response.json()
            if (!response.ok) throw new Error(result.error ?? "Gagal menyimpan kategori.")

            router.push("/admin/categories")
            router.refresh()
        } catch (submitError) {
            setError(submitError instanceof Error ? submitError.message : "Gagal menyimpan kategori.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="m-6 p-6 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => router.push("/admin/categories")}
                    aria-label="Kembali ke daftar kategori"
                >
                    <ArrowLeft aria-hidden="true" />
                </Button>
                <div>
                    <h1 className="text-2xl font-bold">
                        {isEditMode ? "Edit Kategori" : "Tambah Kategori"}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {isEditMode ? "Perbarui nama kategori." : "Tambahkan kategori baru ke daftar."}
                    </p>
                </div>
            </div>

            {error && <p role="alert" className="mb-4 text-sm text-destructive">{error}</p>}

            {isLoading ? (
                <p className="text-sm text-muted-foreground">Memuat data kategori...</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nama Kategori</Label>
                        <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Masukkan nama kategori"
                            maxLength={191}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.push("/admin/categories")}
                            disabled={isSubmitting}
                        >
                            Batal
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Menyimpan..." : "Simpan"}
                        </Button>
                    </div>
                </form>
            )}
        </Card>
    )
}