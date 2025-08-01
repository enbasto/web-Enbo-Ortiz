import { Card, CardContent } from "@/components/ui/card"
import { Code, Heart, Zap, Shield } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Desarrollo Profesional",
      description: "Software desarrollado con las mejores prácticas y tecnologías modernas.",
    },
    {
      icon: Heart,
      title: "Completamente Gratuito",
      description: "Todas las aplicaciones son gratuitas, sin restricciones ni versiones premium.",
    },
    {
      icon: Zap,
      title: "Actualizaciones Constantes",
      description: "Mejoras continuas y nuevas funcionalidades basadas en feedback de usuarios.",
    },
    {
      icon: Shield,
      title: "Seguro y Confiable",
      description: "Software libre de malware, probado y verificado antes de cada lanzamiento.",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Sobre{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Enbo Ortiz</span>
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Soy un desarrollador apasionado por crear software útil y accesible para todos. Mi misión es democratizar el
            acceso a herramientas de calidad, ofreciendo aplicaciones completamente gratuitas que resuelvan problemas
            reales.
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Cada aplicación que desarrollo está pensada para ser intuitiva, eficiente y, sobre todo, útil para la
            comunidad. Creo firmemente que el software de calidad no debe tener barreras económicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-blue-900/30 border-blue-800/30 backdrop-blur-sm hover:bg-blue-900/40 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-200 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
