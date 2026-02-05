import api from "../api/axios"

export const createExpense = async (data) => {
  const response = await api.post("/expense/create", data);
  return response;
};

export const getAllExpense = async () => {
  const response = await api.get("/expense/getAllExpense");
  return response;
};


export const deleteExpense = async (id) => {
  const response = await api.delete(`/expense/delete/${id}`);
  return response;
};

