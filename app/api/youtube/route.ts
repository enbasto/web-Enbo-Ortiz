// app/api/youtube/route.ts
import { NextRequest, NextResponse } from "next/server"

const API_KEY = process.env.YOUTUBE_API_KEY!
const CHANNEL_ID = process.env.ID_CHANNEL!

interface YouTubeVideoItem {
  id: {
    kind: string
    videoId: string
  }
  snippet: {
    title: string
    description: string
    thumbnails: {
      high: {
        url: string
      }
    }
    publishedAt: string
  }
}



export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const pageToken = searchParams.get("pageToken") ?? ""

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&pageToken=${pageToken}`
    )
    const data = await res.json()
    const videos = (data.items as YouTubeVideoItem[])
    .filter((item) => item.id.kind === "youtube#video")
    .map((item) => ({    
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        duration: "0:00", // opcional
        viewCount: "N/A",  // opcional
      }))

    return NextResponse.json({
      videos,
      nextPageToken: data.nextPageToken || null,
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Error al obtener videos" }, { status: 500 })
  }
}
