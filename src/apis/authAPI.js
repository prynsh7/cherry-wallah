import { ROUTES } from "../routes/RouterConfig";
import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";

import * as apiConst from '../utils/apiConstants'


export const AuthAPI = {
    postSendOtp: async (data, cancel = false) => {
        const response = await api.request({
            url: "auth/sendOTP",
            method: "POST",
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postVerifyOtp: async (data, cancel = false) => {
        const response = await api.request({
            url: "auth/verifyOTP",
            method: "POST",
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },


    postRegisterPatient: async (data, cancel = false) => {
        const response = await api.request({
            url: apiConst.REGISTER_PATIENT,
            method: "POST",
            headers: {
                "x-request-token": sessionStorage.getItem('xtoken')
            },
            data: {
                user: data,
                patient: data
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postRegisterDoctor: async (data, cancel = false) => {
        const response = await api.request({
            url: apiConst.REGISTER_DOCTOR,
            method: "POST",
            headers: {
                "x-request-token": sessionStorage.getItem('xtoken')
            },
            data: {
                user: data,
                doctor: data
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    putUpdateDoctor: async (data, cancel = false) => {
        const response = await api.request({
            url: apiConst.UPDATE_DOCTOR,
            method: "PUT",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            data: data,
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
