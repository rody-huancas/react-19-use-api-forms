import { Planet } from "../interfaces/planet.interface";
import { planetsApi } from "../api/planetsApi";

export const getPlanets = async (): Promise<Planet[]> => {
  console.log("petición http");
  const res = await planetsApi.get("/");
  return res.data;
};
