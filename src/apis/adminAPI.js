import { api } from "./config/axiosConfig";
import { defineCancelApiObject } from "./config/axiosUtils";


const headers = {
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth') || '{}')
}

// const country = localStorage.getItem('country');

// if (country) {
//     headers['Ho-Country'] = localStorage.getItem('country') || ''
// }

export const AdminAPI = {
    postLogin: async (data, cancel = false) => {
        const response = await api.request({
            url: "admin/login",
            method: "POST",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth') || '{}') },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postCompanies: async (data, queries, cancel = false) => {
        const response = await api.request({
            url: "admin/companies",
            method: "POST",
            params: queries,
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getCompanies: async (queries, cancel = false) => {
        const response = await api.request({
            url: "admin/search/companies",
            method: "GET",
            params: queries,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    deleteCompanies: async (id, cancel = false) => {
        const response = await api.request({
            url: "admin/company/" + id,
            method: "DELETE",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },


    patchCompany: async (id, data, cancel = false) => {
        const response = await api.request({
            url: "admin/company/" + id,
            method: "PATCH",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    patchCompanyStatus: async (id, data, cancel = false) => {
        const response = await api.request({
            url: "admin/company/" + id + "/status",
            method: "PATCH",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getCompanyById: async (id, cancel = false) => {

        const response = await api.request({
            url: "admin/company/" + id,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;

    },

    postCompanyAddJob: async (id, data, cancel = false) => {
        const response = await api.request({
            url: "admin/company/" + id + "/job",
            method: "POST",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getCompanyJobs: async (id, queries, cancel = false) => {
        const response = await api.request({
            url: "admin/company/" + id + "/jobs",
            method: "POST",
            params: queries,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getCompanyKycById: async (id, cancel = false) => {
        const response = await api.request({
            url: "admin/company/" + id + '/kyc',
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;

    },

    getGstDetails: async (data, cancel = false) => {
        const response = await api.request({
            url: "admin/kyc/ext/gstin",
            method: "POST",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getPanDetails: async (data, cancel = false) => {
        const response = await api.request({
            url: "admin/kyc/ext/pan",
            method: "POST",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },



    patchCompanyKyc: async (data, cancel = false) => {
        const response = await api.request({
            url: "admin/kyc",
            method: "PATCH",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },


    getActiveLocation: async (data, queries, cancel = false) => {
        const response = await api.request({
            url: "admin/all-active-locations",
            params: queries,
            method: "POST",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postActiveLocation: async (data, cancel = false) => {
        const response = await api.request({
            url: "admin/active-locations",
            method: "POST",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });
        return response.data;
    },
    patchActiveLocation: async (id, data, cancel = false) => {
        const response = await api.request({
            url: "admin/active-locations/" + id,
            method: "PATCH",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });
        return response.data;
    },


    getPostedJobs: async (data, queries, cancel = false) => {
        const response = await api.request({
            url: "admin/jobs",
            params: queries,
            method: "POST",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    patchPostedJobs: async (company_id, id, data, cancel = false) => {
        const response = await api.request({
            url: "admin/company/" + company_id + "/job/" + id,
            method: "PATCH",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },


    deletePostedJobs: async (id, cancel = false) => {
        const response = await api.request({
            url: "admin/job/" + id,
            method: "DELETE",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    patchPostedJobs: async (company_id, id, data, cancel = false) => {
        const response = await api.request({
            url: "admin/company/" + company_id + "/job/" + id,
            method: "PATCH",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },


    deletePostedJobs: async (id, cancel = false) => {
        const response = await api.request({
            url: "admin/job/" + id,
            method: "DELETE",
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('admin_auth') },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getJobDetailsById: async (id, cancel = false) => {
        const response = await api.request({
            url: "admin/job/" + id,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getAdminUsers: async (queries, cancel = false) => {
        const response = await api.request({
            url: "admin/list",
            params: queries,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    postAdminUsers: async (data, cancel = false) => {
        const response = await api.request({
            url: "admin/create",
            method: "POST",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    patchAdminUsers: async (id, data, cancel = false) => {
        const response = await api.request({
            url: "admin/update",
            method: "PATCH",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    deleteAdminUsers: async (id, cancel = false) => {
        const response = await api.request({
            url: "admin/user/" + id,
            method: "DELETE",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getJobseekers: async (data, queries, cancel = false) => {
        const response = await api.request({
            url: "admin/users",
            params: queries,
            data: data,
            method: "POST",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getJobseekerById: async (id, cancel = false) => {
        const response = await api.request({
            url: "admin/user/" + id,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    patchJobseeker: async (id, data, cancel = false) => {
        const response = await api.request({
            url: "admin/user/" + id,
            method: "PATCH",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    deleteJobseeker: async (id, cancel = false) => {
        const response = await api.request({
            url: "admin/user/" + id,
            method: "DELETE",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    //SETTINGS

    getCountries: async (cancel = false) => {

        const response = await api.request({
            url: "admin/countries",
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getCountryById: async (id, cancel = false) => {
        const response = await api.request({
            url: "admin/country/" + id,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    patchCountry: async (id, data, cancel = false) => {
        const response = await api.request({
            url: "admin/country/" + id,
            method: "PATCH",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    patchLanguage: async (country_id, id, data, cancel = false) => {
        const response = await api.request({
            url: "admin/language/" + country_id + '/' + id,
            method: "PATCH",
            data: data,
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getLanguagesByCountry: async (country_id, cancel = false) => {
        const response = await api.request({
            url: "common/languages?cc=" + country_id,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },
    getAllLanguages: async (cancel = false) => {
        const response = await api.request({
            url: "admin/search/languages",
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('admin_auth') || "null"), 'Ho-Country': localStorage.getItem('country') || '' },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },
    getPatients: async (cancel = false) => {
        const response = await api.request({
            url: "admin/patients",
            method: "GET",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });

        return response.data;
    },

    getDoctors: async (cancel = false) => {
        const response = await api.request({
            url: "admin/doctors",
            method: "GET",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });
        return response.data;
    },

    getAppointments: async (cancel = false) => {
        console.log(sessionStorage.getItem('token'))
        const response = await api.request({
            url: "admin/appointments",
            method: "GET",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });
        return response.data;
    },

    getAppointmentDetails: async (id,cancel = false) => {
        console.log(sessionStorage.getItem('token'))
        const response = await api.request({
            url: "admin/appointments/"+id,
            method: "GET",
            headers: {
                "x-request-token": sessionStorage.getItem('token')
            },
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined
        });
        return response.data;
    },



}

const cancelApiObject = defineCancelApiObject(AdminAPI);