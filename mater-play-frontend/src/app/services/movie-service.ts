import { api } from "../@libs/axios";
import { IMovie } from "../@libs/types";

const _endpoint = "/movies";

const getMovies = async (): Promise<IMovie[]> => {
  const { data } = await api.get(_endpoint);

  return data;
};

const getMoviesById = async (id: string): Promise<IMovie> => {
  const { data } = await api.get(`${_endpoint}/${id}`);

  return data;
};

export const MoviesService = {
  getMovies,
  getMoviesById,
};
