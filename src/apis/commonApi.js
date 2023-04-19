import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";


export const CommonApi = {
    getStateList: async (data, query, cancel = false) => {
        const response = await api.request({
            url: "payroll/state_list",
            method: "GET",
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            data: data,
            params: query,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getCityList: async (data, query, cancel = false) => {
        const response = await api.request({
            url: "payroll/city_list",
            method: "POST",
            data: data,
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            params: query,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },
   
    


}

const cancelApiObject = defineCancelApiObject(CommonApi);
