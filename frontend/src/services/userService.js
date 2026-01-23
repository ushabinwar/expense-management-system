import api from "../api/axios"

export const signUp = async (data) => {
  const response = await api.post("/user/signup", data);
  return response;
};

export const signIn = async (data) => {
  const response = await api.post("/user/signin", data);
  return response;
};
