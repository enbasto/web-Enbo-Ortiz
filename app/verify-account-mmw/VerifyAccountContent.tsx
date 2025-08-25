"use client"

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import axios from "@/services/axiosConfig.mmw";
import { AxiosError } from "axios";

export default function VerifyAccountContent() {
    const searchParams = useSearchParams();
    const parametro = searchParams.get("p");
    const [messageBack, setMessageBack] = useState<string | null>(null);
    const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);

    useEffect(() => {
        const validateToken = async () => {
            if (!parametro) {
                setMessageBack("Falta un parámetro requerido");
                setIsTokenValid(false);
                return;
            }

            try {
                const response = await axios.post("/api/auth/verifyEmail", {
                    token: parametro,
                });

                if (response.data.status) {
                    setMessageBack(response.data.message);
                    setIsTokenValid(true);
                }
            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                    const errorMessage =
                        error.response?.data?.message || "Error interno de la aplicación.";
                    setMessageBack(errorMessage);
                    setIsTokenValid(false);
                }
            }
        };

        validateToken();
    }, [parametro]);

    if (isTokenValid === null) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
                <p className="text-white">Validando token...</p>
            </div>
        );
    }

    if (isTokenValid === false) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
                    <h2 className="text-lg font-bold text-red-500 mb-4">Token inválido</h2>
                    <p className="text-gray-700 mb-4">
                        No se puede realizar esta acción porque: {messageBack}.
                    </p>
                    <Button
                        onClick={() => {
                            window.location.href = "/";
                        }}
                        className="bg-green-500 text-white w-full hover:bg-green-600"
                    >
                        Volver al inicio
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 ">
            <div className=" bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
                <h2 className="text-lg font-bold text-blue-500 mb-4">Cuenta Verificada</h2>
                <p className="text-gray-700 mb-4">{messageBack}</p>
                <Button
                    onClick={() => {
                        window.location.href = "/";
                    }}
                    className="bg-green-500 text-white w-full hover:bg-green-600"
                >
                    Volver al inicio
                </Button>
            </div>
        </div>
    );
}
