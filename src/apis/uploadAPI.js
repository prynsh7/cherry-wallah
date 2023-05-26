import { ROUTES } from "../routes/RouterConfig";
import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";

import * as apiConst from '../utils/apiConstants'


export const UploadAPI = {

    upload: async (data,name,id, cancel = false) => {
        const response = await api.request({
            url: "auth/upload/"+name+'/'+id,
            method: "POST",
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },
}

const cancelApiObject = defineCancelApiObject(UploadAPI);
