import { ApiEndpoint } from "../types/apiEndpoint";
import { API } from "./config";

export const clearDb = async () => {
  const response = await fetch(`${API}${ApiEndpoint.CLEAR_DB}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
