import Link from "next/link"
import { Github, X, Youtube, Linkedin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@enboortiz",
      icon: Youtube,
      color: "hover:text-red-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/enbasto",
      icon: Github,
      color: "hover:text-gray-300",
    },
    {
      name: "X",
      href: "https://x.com/Soyenbo?t=_Xpabn-C8v9-yAkrp_nXyQ&s=09",
      icon: X,
      color: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/euclides-norbey-basto-ortiz-413442277/",
      icon: Linkedin,
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/soyenbo?utm_source=qr&igsh=MXFsZHFtdXZ6eWRpbA==",
      icon: Instagram,
      color: "hover:text-pink-400",
    },
    {
      name: "Facebook",
      href: "https://web.facebook.com/Enbo.ortiz",
      icon: Facebook,
      color: "hover:text-cyan-400",
    },
  ]

  return (
    <footer className="border-t border-blue-800/30 bg-blue-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Enbo Ortiz
            </h3>
            <p className="text-blue-300 text-sm mt-1">Software gratuito para todos</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-blue-400 ${social.color} transition-colors duration-200 p-2 rounded-full hover:bg-blue-900/30`}
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center text-blue-300 text-sm">
            <p>© {new Date().getFullYear()} Enbo Ortiz. Todos los derechos reservados.</p>
            <p className="mt-1 text-xs text-blue-400">Hecho con ❤️ para la comunidad</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
