"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Home, User, Download, Heart, Video } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/#inicio", label: "Inicio", icon: Home },
    { href: "/#sobre-mi", label: "Sobre mí", icon: User },
    { href: "/#programas", label: "Programas", icon: Download },
    { href: "/#videos", label: "Videos", icon: Video },
    { href: "/#donaciones", label: "Donaciones", icon: Heart },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-950/80 backdrop-blur-md border-b border-blue-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold text-white">Enbo Ortiz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-blue-200 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            {/* <Link href="/admin">
              <Button
                variant="outline"
                size="sm"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
              >
                <Settings className="h-4 w-4 mr-2" />
                Admin
              </Button>
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-blue-200">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-950/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-blue-200 hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
              {/* <Link href="/admin" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Admin
                </Button>
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
