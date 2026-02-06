import api from "../api/axios"

export const createIncome = async (payload) => {
  const {data} = await api.post("/income/create", payload);
  return data;
};


export const getAllIncome = async () => {
  const {data} = await api.get("/income/getAllIncome");
  return data;
};