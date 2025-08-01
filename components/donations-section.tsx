"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Coffee, CreditCard, Smartphone, Banknote, MessageCircle } from "lucide-react"

export function DonationsSection() {
  const donationMethods = [
    {
      name: "PayPal",
      description: "Donación segura a través de PayPal",
      icon: <CreditCard className="h-6 w-6 text-white" />,
      color: "from-blue-600 to-blue-700",
      url: "https://www.paypal.com/donate/?hosted_button_id=5F44JMLT3H5JQ",
    },
    {
      name: "Donar por Nequi",
      description: "Solicita el número Nequi para transferir",
      icon: <Smartphone className="h-6 w-6 text-white" />,
      color: "from-purple-600 to-purple-700",
      url: "https://wa.me/573219316862?text=Hola,%20me%20gustaría%20hacer%20una%20donación%20por%20Nequi.",
    },
    {
      name: "Donar por Banco",
      description: "Transferencia directa a cuenta bancaria",
      icon: <Banknote className="h-6 w-6 text-white" />,
      color: "from-green-600 to-green-700",
      url: "https://wa.me/573219316862?text=Hola,%20por%20favor%20envíame%20los%20datos%20para%20donar%20por%20banco.",
    },
    {
      name: "Donar por Mercado Pago",
      description: "Solicita el enlace de Mercado Pago",
      icon: <CreditCard className="h-6 w-6 text-white" />,
      color: "from-yellow-600 to-yellow-700",
      url: "https://link.mercadopago.com.co/enboortiz",
    },
    {
      name: "Solicitar enlace para donar",
      description: "Contáctame para acordar un método de donación",
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      color: "from-gray-600 to-gray-700",
      url: "https://wa.me/573219316862?text=Hola,%20quiero%20hacer%20una%20donación,%20¿puedes%20enviarme%20el%20enlace?",
    },
  ]

  return (
    <section id="donaciones" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            <Heart className="inline-block mr-3 h-10 w-10 text-red-400" />
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Donaciones</span>
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
            Si mis aplicaciones te han sido útiles, considera hacer una donación para apoyar el desarrollo de más software gratuito.
          </p>
          <div className="bg-blue-900/30 border border-blue-800/30 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-blue-100 mb-4">
              <Coffee className="inline-block mr-2 h-5 w-5 text-yellow-400" />
              Tu apoyo me ayuda a dedicar más tiempo al desarrollo de herramientas útiles para la comunidad.
            </p>
            <p className="text-blue-200 text-sm">
              Todas las donaciones son voluntarias y muy apreciadas. El software seguirá siendo gratuito para todos.
            </p>
          </div>
        </div>

        {/* Donation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* {donationMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-blue-900/30 border-blue-800/30 backdrop-blur-sm hover:bg-blue-900/40 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className="mb-2 flex justify-center">{method.icon}</div>
                <CardTitle className="text-white">{method.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-200 text-sm mb-4">{method.description}</p>
                <Button
                  className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white`}
                  onClick={() => window.open(method.url, "_blank")}
                >
                  Donar
                </Button>
              </CardContent>
            </Card>
          ))} */}

{donationMethods.map((method, index) => {
  const isLast = index === donationMethods.length - 1
  const isOdd = donationMethods.length % 2 !== 0

  return (
    <Card
      key={index}
      className={`
        bg-blue-900/30 border-blue-800/30 backdrop-blur-sm 
        hover:bg-blue-900/40 transition-all duration-300
        ${isLast && isOdd ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}
      `}
    >
      <CardHeader className="text-center">
        <div className="mb-2 flex justify-center">{method.icon}</div>
        <CardTitle className="text-white">{method.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-blue-200 text-sm mb-4">{method.description}</p>
        <Button
          className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white`}
          onClick={() => window.open(method.url, "_blank")}
        >
          Donar
        </Button>
      </CardContent>
    </Card>
  )
})}

        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-800/30 rounded-lg p-6 backdrop-blur-sm">
            <h4 className="text-lg font-semibold text-white mb-2">¿Por qué donar?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-200">
              <div>
                <div className="text-blue-400 font-medium mb-1">Desarrollo Continuo</div>
                <div>Nuevas aplicaciones y actualizaciones regulares</div>
              </div>
              <div>
                <div className="text-blue-400 font-medium mb-1">Soporte Técnico</div>
                <div>Mejor atención y resolución de problemas</div>
              </div>
              <div>
                <div className="text-blue-400 font-medium mb-1">Hosting y Servicios</div>
                <div>Mantener la plataforma funcionando 24/7</div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
  )
}
