"use client"

import { Suspense } from "react";
import VerifyAccountContent from "./VerifyAccountContent";
// import VerifyAccountContent from "./VerifyAccountContent"; // Importa el nuevo componente

export default function VerifyAccountUser() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <VerifyAccountContent />
        </Suspense>
    );
}
