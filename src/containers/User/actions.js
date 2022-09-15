import {
  FETCH_USER_FAILED,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  SAVE_USER_FAILED,
  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
} from "./reducer";

export function fetchUser(id) {
  return {
    type: FETCH_USER_REQUEST,
    payload: id,
  };
}

export function fetchUserSuccess(data) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
}

export function fetchUserFailed(err) {
  return {
    type: FETCH_USER_FAILED,
    payload: err,
  };
}

export function saveUser(data) {
  return {
    type: SAVE_USER_REQUEST,
    payload: data,
  };
}

export function saveUserSuccess(data) {
  return {
    type: SAVE_USER_SUCCESS,
    payload: data,
  };
}

export function saveUserFailed(err) {
  return {
    type: SAVE_USER_FAILED,
    payload: err,
  };
}
