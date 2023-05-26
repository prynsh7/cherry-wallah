import { ROUTES } from "../routes/RouterConfig";
import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";

import * as apiConst from '../utils/apiConstants'


export const AppointmentAPI = {

    getAppointments: async (cancel = false) => {
        const response = await api.request({
            url: "appointment",
            method: "GET",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getAppointmentById: async (id, cancel = false) => {
        const response = await api.request({
            url: "appointment/" + id,
            method: "GET",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postAppointment: async (data, cancel = false) => {
        const response = await api.request({
            url: "appointment/book",
            method: "POST",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data
    },

    patchAppointmentById: async (id, data, cancel = false) => {
        const response = await api.request({
            url: "appointment/" + id,
            method: "PATCH",
            data: data,
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data
    }


}

const cancelApiObject = defineCancelApiObject(AppointmentAPI);
