import axios from "axios";
import { API_KEY } from "./api-key_beka";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: API_KEY
    }
})