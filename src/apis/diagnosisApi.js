import { ROUTES } from "../routes/RouterConfig";
import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";

import * as apiConst from '../utils/apiConstants'


export const DiagnosisAPI = {

    getDiagnosis: async (cancel = false) => {
        const response = await api.request({
            url: "diagnosis",
            method: "GET",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getDiagnosisById: async (id, cancel = false) => {
        const response = await api.request({
            url: "diagnoses/" + id,
            method: "GET",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getDiagnosisByAppointmentId: async (id, cancel = false) => {
        const response = await api.request({
            url: "diagnoses/appointment/" + id,
            method: "GET",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    putDiagnosis: async (data, id,cancel = false) => {
        const response = await api.request({
            url: "diagnosis/"+id,
            method: "PUT",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data
    },



}

const cancelApiObject = defineCancelApiObject(DiagnosisAPI);
