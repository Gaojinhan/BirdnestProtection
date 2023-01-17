import axios from "axios";

const client = axios.create({
  baseURL: "https://birdnestprotectionapi.onrender.com/api", 
});

export default client;