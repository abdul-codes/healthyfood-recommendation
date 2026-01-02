import axios from "axios";
import { FoodRecommendationResponse, RecommendationRequest } from "./types";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function getFoodRecommendations(
  request: RecommendationRequest,
): Promise<FoodRecommendationResponse> {
  const response = await axios.post<FoodRecommendationResponse>(
    `${API_URL}/recommendations`,
    request,
  );
  return response.data;
}
