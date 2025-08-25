import axios from "axios";

const baseUriBackend = process.env.NEXT_PUBLIC_BACKEND_MMW_URL || ""

const apiClient = axios.create({
  baseURL: baseUriBackend, // Cambia esto a la URL de tu API
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
