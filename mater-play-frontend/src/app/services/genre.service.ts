import { api } from "../@libs/axios";
import { IGenre } from "../@libs/types";

const _endpoint = "/genres";

const create = (genre: IGenre) => api.post(_endpoint, genre);
const getAll = () => api.get(_endpoint);
const getById = (id: string) => api.get(`${_endpoint}/${id}`);
const remove = (id: string) => api.delete(`${_endpoint}/${id}`);

export const GenreService = {
  create,
  getAll,
  getById,
  remove,
};
