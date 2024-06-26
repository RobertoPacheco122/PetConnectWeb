import { API_BASE_URL } from "./requestConfig";

export const fetchAllServices = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/service`, {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    });

    if (response.status !== 200)
      throw new Error("Ocorreu um erro ao buscar todos os serviços");

    const responseInJson = response.json();

    return responseInJson;
  } catch (error) {
    console.error(error);
  }
};
