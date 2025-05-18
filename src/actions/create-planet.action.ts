import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const createPlanetAction = async (planet: Partial<Planet>) => {
  try {
    const respose = await planetsApi.post<Planet>("/", planet);
    return respose.data;
  } catch (error) {
    console.log(error)
    return null;
  }
};

export const createPlanetActionForm = async (prevState: unknown, queryData: FormData) => {
  const formData = Object.fromEntries(queryData.entries());
  try {
    const respose = await planetsApi.post<Planet>("/", formData);
    return respose.data;
  } catch (error) {
    console.log(error)
    // return null;
    throw new Error("No se pudo agregar el planeta")
  }
};
