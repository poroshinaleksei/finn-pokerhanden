import { ApiEndpoint } from "../types/apiEndpoint";
import { API } from "./config";

export const generateHands = async () => {
  const response = await fetch(`${API}${ApiEndpoint.GENERATE_HANDS}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
