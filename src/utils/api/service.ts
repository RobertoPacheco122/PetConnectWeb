import { EServiceRequestStatus } from "@/app/cart/cartPage";
import { API_BASE_URL } from "./requestConfig";

interface IPostServiceRequestParams {
  requestStatus: EServiceRequestStatus;
  requestDate: string;
  userWhoRequestedId: string;
  serviceId: string;
}

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
      throw new Error("Ocorreu um erro ao buscar todos os serviços.");

    const responseInJson = await response.json();

    return responseInJson;
  } catch (error) {
    console.error(error);
  }
};

export const fetchServiceById = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/service/${id}`, {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    });

    if (response.status !== 200)
      throw new Error("Ocorreu um erro ao buscar o serviço pelo id.");

    const responseInJson = await response.json();

    return responseInJson;
  } catch (error) {
    console.error(error);
  }
};

export const postServiceRequest = async (params: IPostServiceRequestParams) => {
  try {
    const response = await fetch(`${API_BASE_URL}/serviceRequest`, {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(params),
    });

    if (response.status !== 200)
      throw new Error(
        "Ocorreu um erro ao enviar ao enviar os dados de solicitação de serviço."
      );

    const responseInJson = await response.json();

    return responseInJson;
  } catch (error) {
    console.error(error);
  }
};
