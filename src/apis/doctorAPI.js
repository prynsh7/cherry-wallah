import { ROUTES } from "../routes/RouterConfig";
import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";

import * as apiConst from '../utils/apiConstants'


export const DoctorAPI = {

    getMe: async (cancel = false) => {
        const response = await api.request({
            url: "doctor/getMe",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            method: "GET",
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getDoctors: async (cancel = false) => {
        const response = await api.request({
            url: "doctor",
            method: "GET",
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getDoctorById: async (id, cancel = false) => {
        const response = await api.request({
            url: "doctor/" + id,
            method: "GET",
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    }


}

const cancelApiObject = defineCancelApiObject(DoctorAPI);
