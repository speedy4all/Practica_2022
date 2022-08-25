import { FETCH_USERS_FAILED, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./reducer";


export function fetchUsers() {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

export function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}

export function fetchUsersFailed(err) {
    return {
        type: FETCH_USERS_FAILED,
        payload: err,
    }
}