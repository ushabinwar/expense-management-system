import api from "../api/axios"

export const createExpense = async (data) => {
  const response = await api.post("/expense/create", data);
  return response;
};

