import { Button } from "@/components/ui/button"
import { Download, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur-3xl opacity-20 rounded-full"></div>
            <h1 className="relative text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Enbo Ortiz
              </span>
            </h1>
          </div>
          <p className="text-xl sm:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Software gratuito de calidad para todos. Descarga aplicaciones útiles sin costo alguno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#programas">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3"
              >
                <Download className="mr-2 h-5 w-5" />
                Ver Programas
              </Button>
            </a>
            <a href="#sobre-mi">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 bg-transparent"
              >
                <Star className="mr-2 h-5 w-5" />
                Sobre mí
              </Button>
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-blue-200">Aplicaciones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1K+</div>
              <div className="text-blue-200">Descargas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-blue-200">Gratuito</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
