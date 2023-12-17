import axios from 'axios';

const axiosApi = axios.create({
  baseURL: "https://hw-68-16a6d-default-rtdb.europe-west1.firebasedatabase.app/"
});

export default axiosApi;