import { ApiEndpoint } from "../types/apiEndpoint";
import { API } from "./config";

export const getSavedHands = async () => {
  const response = await fetch(`${API}${ApiEndpoint.GET_SAVED_HANDS}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
