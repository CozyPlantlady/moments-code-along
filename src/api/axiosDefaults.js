import axios from "axios"

axios.defaults.baseURL = 'https://api-practice-for-cozy.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;