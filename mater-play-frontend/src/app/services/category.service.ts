import { api } from "../@libs/axios";
import { ICategory } from "../@libs/types";

const _endpoint = "/categories";

const create = (category: ICategory) => api.post(_endpoint, category);
const getAll = () => api.get(_endpoint);
const getById = (id: number) => api.get(`${_endpoint}/${id}`);
const update = (id: number, category: ICategory) =>
  api.put(`${_endpoint}/${id}`, category);
const remove = (id: number) => api.delete(`${_endpoint}/${id}`);

export const CategoryService = {
  create,
  getAll,
  getById,
  update,
  remove,
};
