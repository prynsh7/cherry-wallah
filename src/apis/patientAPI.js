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
    }

}

const cancelApiObject = defineCancelApiObject(PatientAPI);
