"use client"

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import axios from "@/services/axiosConfig.sms";
import { AxiosError } from 'axios'
import { Button } from "@/components/ui/button"

// Componente de verificación de cuenta
function VerifyAccountUser() {
    const searchParams = useSearchParams()
    const parametro = searchParams.get('p')
    const [messageBack, setmessageBack] = useState<string | null>(null)
    const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null)
    const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND;

    useEffect(() => {
        const validateToken = async () => {
            if (!parametro) {
                setmessageBack("Falta un parámetro requerido")
                setIsTokenValid(false)
                return
            }

            try {
                const response = await axios.post(`/api/users/verifyEmail`, {
                    token: parametro,
                })
                console.log(response)
                if (response.data.status) {
                    setmessageBack(response.data.message)
                    setIsTokenValid(true)
                }
            } catch (err) {
                console.log(err)
                if (err instanceof AxiosError) {
                    setmessageBack(err.response?.data?.message ?? 'Ocurrió un error desconocido')
                } else {
                    setmessageBack('Ocurrió un error inesperado')
                }

                setIsTokenValid(false)
            }
        }

        validateToken()
    }, [parametro, API_BASE_URL])

    if (isTokenValid === null) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
                <p className='text-white'>Validando token...</p>
            </div>
        )
    }

    if (isTokenValid === false) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
                    <h2 className="text-lg font-bold text-utility_primary mb-4">Token inválido</h2>
                    <p className="text-gray-700 mb-4">
                        No se puede realizar esta acción porque: {messageBack}.
                    </p>
                    <Button
                        onClick={() => {
                            window.location.href = "/"
                        }}
                        className="bg-green-500 text-white w-full hover:bg-green-600"
                    >
                        Volver al inicio
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
                <h2 className="text-lg font-bold text-black mb-4">Cuenta Verificada</h2>
                <p className="text-gray-700 mb-4">
                    {messageBack}
                </p>
                <Button
                    onClick={() => {
                        window.location.href = "/"
                    }}
                    className="bg-green-500 text-white w-full hover:bg-green-600"
                >
                    Volver al inicio
                </Button>
            </div>
        </div>
    )
}

// Componente de la página con Suspense
export default function VerifyAccountPage() {
  return (
    <Suspense >
      <VerifyAccountUser />
    </Suspense>
  )
}
