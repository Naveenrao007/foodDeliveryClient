import axios from "axios";
import { addTokenToHeader } from "../helper/Header";

const home = async () => {
    const headers = addTokenToHeader({ headers: {} });

    try {
        const response = await axios.get(`${import.meta.env.VITE_BaseUrl}/dashboard/home`, {
            headers
        })
        console.log(response.data);
        return {
            data: response.data,
            status: response.status
        };
    } catch (error) {
        return {
            error: error.response ? error.response.data : "Internal server error",
            status: error.response ? error.response.status : 500
        };

    }

}
 export   {home}