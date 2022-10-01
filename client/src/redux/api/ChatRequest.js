import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3002" });

export const createChat = (members) => API.post("/chat", members);

export const userChats = (id) => API.get(`/chat/${id}`);
