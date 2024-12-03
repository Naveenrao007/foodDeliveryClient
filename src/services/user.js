import axios from "axios";
import { addTokenToHeader } from "../helper/Header";
const register = async (data) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BaseUrl}/user/register`, data, {

        });

        return {
            data: res.data,
            status: res.status
        };

    } catch (error) {
        console.error("Error in registration:", error);
        return {
            error: error.response ? error.response.data : "Internal server error",
            status: error.response ? error.response.status : 500
        };
    }
};
const login = async (data) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_BaseUrl}/user/login`, data, {

        });

        return {
            data: res.data,
            status: res.status
        };

    } catch (error) {
        console.error("Error in login:", error);
        return {
            error: error.response ? error.response.data : "Internal server error",
            status: error.response ? error.response.status : 500
        };
    }
};
const getUser = async () => {
    const headers = addTokenToHeader({ headers: {} });
    try {
        const res = await axios.get(`${import.meta.env.VITE_BaseUrl}/user/profile`, {
            headers
        });

        return {
            data: res.data,
            status: res.status
        };

    } catch (error) {
        return {
            error: error.response ? error.response.data : "Internal server error",
            status: error.response ? error.response.status : 500
        };
    }
}
const updateUser = async (data) => {
    const headers = addTokenToHeader({ headers: {} });

    try {
        const res = await axios.post(`${import.meta.env.VITE_BaseUrl}/user/update`, data, {
            headers
        });

        return {
            data: res.data,
            status: res.status
        };

    } catch (error) {
        return {
            error: error.response ? error.response.data : "Internal server error",
            status: error.response ? error.response.status : 500
        };
    }
};

const addUpdateCard = async (data) => {
    console.log(data);
    const headers = addTokenToHeader({ headers: {} });

    try {
        const res = await axios.put(`${import.meta.env.VITE_BaseUrl}/user/addupdatecard`, data, {
            headers
        });

        return {
            data: res.data,
            status: res.status
        };

    } catch (error) {
        console.error("Error in registration:", error);
        return {
            error: error.response ? error.response.data : "Internal server error",
            status: error.response ? error.response.status : 500
        };
    }
};
const addUpdateaddress = async (data) => {
    console.log(data);
    const headers = addTokenToHeader({ headers: {} });

    try {
        const res = await axios.put(`${import.meta.env.VITE_BaseUrl}/user/addupdateaddress`, data, {
            headers
        });

        return {
            data: res.data,
            status: res.status
        };

    } catch (error) {
        console.error("Error in registration:", error);
        return {
            error: error.response ? error.response.data : "Internal server error",
            status: error.response ? error.response.status : 500
        };
    }
};
const removeAddress = async (address) => {
    console.log("Removing address with ID:", address.addId);

    
    const addId = address.addId;
    const headers = addTokenToHeader({ headers: {} });

    try {
        const res = await axios.delete(`${import.meta.env.VITE_BaseUrl}/user/deleteaddress/${addId}`, {
            headers
        });

        console.log(res); 

        return {
            data: res.data,
            status: res.status
        };
    } catch (error) {
        console.error("Error removing address:", error);
        return {
            error: error.response ? error.response.data : "Internal server error",
            status: error.response ? error.response.status : 500
        };
    }
};


export { register, getUser, login, updateUser, addUpdateCard, addUpdateaddress, removeAddress };
