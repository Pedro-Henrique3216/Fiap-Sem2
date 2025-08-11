import axios from "axios";

export const fetchPosts =  async() => {
    const response = await axios.get("https://6890baf7944bf437b5971d32.mockapi.io/users");
    return response.data; //retorna os dados da requisição
}
