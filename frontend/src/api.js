import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });
console.log("Base URL:", API.defaults.baseURL);


API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token"); // 👈 login ke baad yahan save hota hai
    console.log(token)

    if (token) {
        req.headers.Authorization = `Bearer ${token}`; //👈 backend me milta hai
    }

    console.log("Token from localStorage:", token);
    return req;
});

export default API;