import { ROUTES } from "../routes/RouterConfig";
import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";

import * as apiConst from '../utils/apiConstants'


export const PatientAPI = {

    postLogin: async (data, cancel = false) => {
        const response = await api.request({
            url: "auth/login",
            method: "POST",
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getPatient: async (cancel = false) => {
        const response = await api.request({
            url: "patient/getMe",
            method: "GET",
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('bearerToken'))}`,
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });
        return response.data;
    },

    updatePatient: async (data, cancel = false) => {
        const response = await api.request({
            url: "patient/updateMe",
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('bearerToken'))}`,
                "x-request-token": sessionStorage.getItem('token')
            },
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });
        return response.data;
    },
}

const cancelApiObject = defineCancelApiObject(PatientAPI);
