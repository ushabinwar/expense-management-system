import api from "../api/axios"

export const createExpense = async (data) => {
  const response = await api.post("/expense/create", data);
  return response;
};

export const getAllExpense = async () => {
  const {data} = await api.get("/expense/getAllExpense");
  console.log("data:",data)
  return data;
};

