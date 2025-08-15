"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "@/services/axiosConfig";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import Loading from "@/components/loader";
import { useToast } from "@/hooks/use-toast";

function NewPasswordUserComponent() {
  const searchParams = useSearchParams();
  const parametro = searchParams.get("p");
  const router = useRouter();
  const { toast } = useToast();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);

  useEffect(() => {
    const validateToken = async () => {
      if (!parametro) {
        setError("Falta un parámetro requerido");
        setIsTokenValid(false);
        return;
      }

      try {
        const response = await axios.post("/api/auth/verifyResetToken", {
          token: parametro,
        });
        if (response.data.status) {
          setIsTokenValid(true);
        } else {
          setError("El token no es válido o ha expirado");
          setIsTokenValid(false);
        }
      } catch (err) {
        console.error(err);
        setError("Error al validar el token");
        setIsTokenValid(false);
      }
    };

    validateToken();
  }, [parametro]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await axios.post("/api/auth/resetPassword", {
        token: parametro,
        newPassword: password,
      });

      if (response.data.status) {
        toast({
          title: "Éxito",
          description: "Contraseña actualizada correctamente.",
        });
        router.push("/");
      } else {
        toast({
          title: "Error",
          description: response.data.message || "No se pudo actualizar la contraseña.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Error al actualizar la contraseña:", err);
      toast({
        title: "Error",
        description: "Error en el servidor. Por favor, intenta más tarde.",
        variant: "destructive",
      });
    }
  };

  if (isTokenValid === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
        <Loading />
      </div>
    );
  }

  if (isTokenValid === false) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
          <h2 className="text-lg font-bold text-red-600 mb-4">Token inválido</h2>
          <p className="text-gray-700 mb-4">
            No se puede realizar esta acción porque el token es inválido o ha expirado.
          </p>
          <Button
            onClick={() => {
              router.push("/");
            }}
            className="bg-red-500 text-white w-full hover:bg-red-600"
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
      <div className="w-full bg-white max-w-md p-8 space-y-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-black">Crear Nueva Contraseña</h1>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Nueva contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10 bg-white"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full bg-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </Button>
          </div>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full bg-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
            </Button>
          </div>
          <Button type="submit" className="w-full bg-green-500 text-white hover:bg-green-600">
            Cambiar Contraseña
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function NewPasswordUser() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loading /></div>}>
      <NewPasswordUserComponent />
    </Suspense>
  );
}
