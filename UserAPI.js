import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:4500"
});

export const UserAPI = {
    getAll: function () {
        return axiosInstance.request({
            method: 'GET',
            url: '/users'
        })
    },
    getById: function (userId) {
        return axiosInstance.request({
            method: 'GET',
            url: `./users/${userId}`
        })
    },
    create: function (user) {
        return axiosInstance.request({
            method: 'POST',
            url: `/users`,
            data: user
        })
    },
    update: function (userId,user) {
        return axiosInstance.request({
            method: 'PUT',
            url: `/users/${userId}`,
            data: user
        })
    },
    delete: function (userId) {
        return axiosInstance.request({
            method: 'DELETE',
            url: `/users/${userId}`
        })
    }
};