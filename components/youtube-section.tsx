"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  viewCount: string
  duration: string
  url: string
}

export function YouTubeSection() {
  const [videos, setVideos] = useState<Video[]>([])
  const [nextPageToken, setNextPageToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchVideos = async (token: string | null = null) => {
    setLoading(true)
    const res = await fetch(`/api/youtube${token ? `?pageToken=${token}` : ""}`)
    const data = await res.json()
    console.log("Fetched YouTube videos:", data)
    setVideos((prev) => [...prev, ...data.videos])
    setNextPageToken(data.nextPageToken)
    setLoading(false)
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Videos de{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">YouTube</span>
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
            Tutoriales, tips y contenido educativo sobre desarrollo de software.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white bg-transparent"
            onClick={() => window.open("https://www.youtube.com/@enboortiz", "_blank")}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Ver Canal Completo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="bg-blue-900/30 border-blue-800/30 backdrop-blur-sm hover:bg-blue-900/40 transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={225}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white rounded-full"
                    onClick={() => window.open(video.url, "_blank")}
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-blue-200 text-sm mb-3 line-clamp-2">{video.description}</p>
                <div className="flex items-center justify-between text-xs text-blue-300">
              
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date(video.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {nextPageToken && (
          <div className="mt-12 flex justify-center">
            <Button
              onClick={() => fetchVideos(nextPageToken)}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              {loading ? "Cargando..." : "Más Videos"}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
