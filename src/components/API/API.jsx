import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b891edb4-172f-4673-a388-0183624ea4a0"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize)  {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                        return response.data
                    }
                ))
    },
    toUnFollowRequest( userId ) {
        return (
            instance.delete(`follow/` + userId)
                .then(response => {
                        return response.data
                    }
                )
        )
    },
    toFollowRequest( userId ) {
        return (
            instance.post(`follow/` + userId, {})
                .then(response => {
                        return response.data
                    }
                )
        )
    },
    toLogin() {
        return (
            instance.get(`auth/me`)
                .then(response => {
                    return  response.data.data;
                })
        )
    },
    getUserProfile( userID ) {
        return profileAPI.getUserProfile(userID)
    }
};

export const profileAPI = {
    getUserProfile( userID ) {
        return (
            instance.get(`profile/` + userID)
                .then(response => {
                    return response.data
                })
        )
    },
    sendStatus( status ) {
        return (
            instance.put('profile/status/', {status: status})
        )
    },
    getUsersStatus( userId ) {
        return (
            instance.get('profile/status/' + userId)
                .then(response => {
                    return response.data
                })
        )
    },
    sendPhoto( photoToSend ) {
        return (
            instance.put('/profile/photo', photoToSend, { // существует несколько форматов отправки файлов
                headers: {                              // для отправки картинки или иного не txt файла используется формат 'multipart/form-data'
                    'Content-Type': 'multipart/form-data' // для того что бы отправить в этом формате необходимо создать объект FormData при помощи
                }                                       // следующего кода formData = new FormData(название, файл) - внутри скобочек указываем 1. Название файла который мы отправляем 2. Вкладываем сам файл
            })
                .then(response => {
                    return response.data
                })
        )
    }
};

export const authAPI = {
    authorization( email, password, rememberMe ) {
        return (
            instance.post(`auth/login?email=${email}&password=${password}&rememberMe=${rememberMe}`, {})
                .then(response => {
                    return response.data
                })
        )
    },
    deAuthorization() {
        return (
            instance.delete(`auth/login/`)
                .then(response => {
                    return response.data
                })
        )
    }
};