import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";


export const DashboardAPI = {
    postAddEmployee: async (data, cancel = false) => {
        const response = await api.request({
            url: "payroll/emp_add",
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data'
            },
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },
    getAllEmployee: async (query, cancel = false) => {
        const response = await api.request({
            url: "payroll/emp",
            method: "GET",
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            params: query,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },
    getEmployeeById: async (id, cancel = false) => {
        const response = await api.request({
            url: "payroll/emp/" + id,
            method: "GET",
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },
    updateEmployeeById: async (id, data, cancel = false) => {
        const response = await api.request({
            url: "payroll/emp/" + id,
            method: "PUT",
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postAddComp: async (data, cancel = false) => {
        const response = await api.request({
            url: "payroll/comp",
            method: "POST",
            data: data,
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getDetails: async (id, cancel = false) => {
        const response = await api.request({
            url: "payroll/form_details",
            method: "GET",
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getCompany: async (cancel = false) => {
        const response = await api.request({
            url: "payroll/comp",
            method: "GET",
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getCompanyById: async (id, cancel = false) => {
        const response = await api.request({
            url: "payroll/comp/" + id,
            method: "GET",
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    }
}

const cancelApiObject = defineCancelApiObject(DashboardAPI);
