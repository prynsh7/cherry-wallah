import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";

export const ProfileAPI = {
    getProfile: async (cancel = false) => {
        const response = await api.request({
            url: "profile/",
            method: "GET",
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('bearerToken'))}`},
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });
        return response.data;
    },

    putProfile: async (profile, cancel = false) => {
        const response = await api.request({
            url: "profile/",
            method: "PUT",
            data: profile,
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('bearerToken'))}`},
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    putChangePassword: async (password, cancel = false) => {
        const response = await api.request({
            url: "profile/change-password/",
            method: "PUT",
            data: password,
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('bearerToken'))}`},
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    }
}

const cancelApiObject = defineCancelApiObject(ProfileAPI);