import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";


export const AuthAPI = {
    postSendOtp: async (data, cancel = false) => {
        const response = await api.request({
            url: "auth/sendOTP",
            method: "POST",
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('fbToken'))}` },
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postVerifyOtp: async (data, cancel = false) => {
        const response = await api.request({
            url: "auth/verifyOTP",
            method: "POST",
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('fbToken'))}` },
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },


    postRegister: async (data, cancel = false) => {
        const response = await api.request({
            url: "auth/signup",
            method: "POST",
            headers: { 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('fbToken'))}` },
            data: {
                user: data
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postLogin: async (data, cancel = false) => {
        const response = await api.request({
            url: "auth/login",
            method: "POST",
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    }

}

const cancelApiObject = defineCancelApiObject(AuthAPI);
