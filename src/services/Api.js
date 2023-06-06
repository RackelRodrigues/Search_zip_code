import axios from "axios";

//58706130/json

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
})

export default api