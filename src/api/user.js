import request from './request'

export const getUser = (params) => {
    return request({
        url: '/users',
        params
    })
}

export const changeUserState = (uId, type) => {
    return request({
        url: `users/${uId}/state/${type}`,
        method: 'PUT'
    })
}

export const addUser = (data) => {
    return request({
        url: 'users',
        method: 'POST',
        data
    })
}

export const editUser = (data) => {
    return request({
        url: `users/${data.id}`,
        method: 'PUT',
        data
    })
}

export const delUser = (id) => {
    return request({
        url: `users/${id}`,
        method: 'DELETE'
    })
}
