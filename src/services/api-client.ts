import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        // it will be includded in http request that we send to backend
        key: '14a19e73aa264eaebdb4fc1c4211962c'
    }
})