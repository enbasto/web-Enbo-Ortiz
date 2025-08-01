// app/not-found.tsx
"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Frown } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <Frown className="w-16 h-16 text-blue-500 mb-4" />
      <h1 className="text-3xl font-bold text-white mb-2">Página no encontrada</h1>
      <p className="text-blue-300 mb-6">
        Lo sentimos, no encontramos la página que estás buscando.
      </p>
      <Button
        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
        onClick={() => router.push("/")}
      >
        Volver al inicio
      </Button>
    </div>
  )
}
