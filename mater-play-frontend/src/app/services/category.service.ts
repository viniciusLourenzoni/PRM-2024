import { api } from "../@libs/axios";
import { ICategory } from "../@libs/types";

const _endpoint = "/categories";

const create = (category: ICategory) => api.post(_endpoint, category);
const getAll = () => api.get(_endpoint);
const getById = (id: string) => api.get(`${_endpoint}/${id}`);
const update = (id: string, category: ICategory) =>
  api.put(`${_endpoint}/${id}`, category);
const remove = (id: string) => api.delete(`${_endpoint}/${id}`);

export const CategoryService = {
  create,
  getAll,
  getById,
  update,
  remove,
};
