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
    }
}