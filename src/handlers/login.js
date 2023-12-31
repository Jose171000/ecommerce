import axios from "axios"
import { API_URL } from "../constants/env"
import { setToken } from "../helpers/auth";

export const login = async (user, navigate, setError) => {
    try {
        const response = await axios.post(`${API_URL}/public/login`, user);
        setToken(response.data.data.token)
        console.log(response);
        navigate("/")

        alert("Inicio de sesión exitoso");
    } catch (error) {
        console.log(error);
        setError(error);
    }
}