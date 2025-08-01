import { NextRequest, NextResponse } from 'next/server'
// Removed unused or incorrect import

import path from 'path'
import fs from 'fs/promises'

interface Program {
  id: string
  name: string
  description: string
  version: string
  downloadUrl: string
  category: string
  downloads: number
  rating: number
  releaseDate: string // Si lo necesitas como Date, puedes convertirlo en tiempo de ejecución
  size: string
  usageTutorial: string
}



const programsFilePath = path.join(process.cwd(), 'public/data/programs.json')

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id  = (await params).id

    const fileContent = await fs.readFile(programsFilePath, 'utf-8')
    const programs: Program[] = JSON.parse(fileContent)

const index = programs.findIndex((program) => program.id === id)

    if (index === -1) {
      return NextResponse.json({ error: 'Programa no encontrado' }, { status: 404 })
    }

    programs[index].downloads += 1
    await fs.writeFile(programsFilePath, JSON.stringify(programs, null, 2))

    return NextResponse.json({ message: 'Contador actualizado' })
  } catch (error) {
    console.error('Error actualizando descargas:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
