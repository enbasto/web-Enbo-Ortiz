"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Calendar, Tag } from "lucide-react"

interface Program {
  id: string
  name: string
  description: string
  version: string
  downloadUrl: string
  category: string
  downloads: number
  rating: number
  releaseDate: string
  size: string
  usageTutorial?: string 
}

export function ProgramsSection() {
  const [programs, setPrograms] = useState<Program[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")



  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch("/data/programs.json")
        const data = await res.json()
        setPrograms(data)
      } catch (error) {
        console.error("Error al cargar los programas:", error)
      }
    }

    fetchPrograms()
  }, [])


  const categories = ["all", ...Array.from(new Set(programs.map((p) => p.category)))]
  const filteredPrograms =
    selectedCategory === "all" ? programs : programs.filter((p) => p.category === selectedCategory)

  return (
    <section id="programas" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Programas{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Disponibles
            </span>
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Descarga aplicaciones útiles y completamente gratuitas para mejorar tu productividad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  : "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              }
            >
              <Tag className="mr-2 h-4 w-4" />
              {category === "all" ? "Todos" : category}
            </Button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <Card
              key={program.id}
              className="bg-blue-900/30 border-blue-800/30 backdrop-blur-sm hover:bg-blue-900/40 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-white text-lg">{program.name}</CardTitle>
                  <Badge variant="secondary" className="bg-blue-700 text-blue-100">
                    v{program.version}
                  </Badge>
                </div>
                <p className="text-blue-200 text-sm">{program.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-blue-300">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{program.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>{program.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-blue-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {/* <span>{new Date(program.releaseDate).toLocaleDateString()}</span> */}
                      <span>{new Date(program.releaseDate).toISOString().split("T")[0]}</span>

                    </div>
                    <span>{program.size}</span>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                    onClick={async () => {
                      await fetch(`/api/download/${program.id}`, { method: "POST" })

                      const res = await fetch("/data/programs.json")
                      const updated = await res.json()
                      setPrograms(updated)

                      window.location.href = program.downloadUrl
                    }}

                  >
                    <Download className="mr-2 h-4 w-4" />
                    Descargar
                  </Button>
                  {program.usageTutorial && (
                    <Button
                      className="w-full mt-2 bg-blue-800 text-white hover:bg-blue-700"
                      onClick={() => window.open(program.usageTutorial, "_blank")}
                      variant="outline"
                    >
                      Tutorial de uso
                    </Button>
                  )}

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
