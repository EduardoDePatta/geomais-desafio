import axios from "axios";
import moment from "moment"

const Api = axios.create({
  baseURL: "http://localhost:5000"
});


export default {

  async getUsers() {
    const response = await Api.get("/api/cadastro");
    return response.data.map(user => ({...user, data_nasc: moment(user.data_nasc)}));  
  },

  async saveUser(user) {
    const method = user.id ? "put" : "post";
    const url = user.id ? `/api/cadastro/${user.id}` : "/api/cadastro";
    const response = await Api[method](url, user);
    return response.data; 
  },

  async removeUser({ id }) {
    const response = await Api.delete(`/api/cadastro/${id}`);
    return response.data;
  }
}

