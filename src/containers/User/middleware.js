import { fetchUserApi, fetchUsersApi, saveUserApi } from "../../api";
import { fetchUserFailed, fetchUserSuccess, saveUserFailed, saveUserSuccess } from "./actions";
import { FETCH_USER_REQUEST, SAVE_USER_REQUEST } from "./reducer";
import { all, call, put, takeLatest } from "redux-saga/effects";

export function* fetchUserMiddleware() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserHandler);
}

export function* fetchUserHandler(action) {
  try {
    const resp = yield call(fetchUserApi, action.payload);
    yield put(fetchUserSuccess(resp));
  } catch (e) {
    yield put(fetchUserFailed(e.message));
  }
}

export function* saveUserMiddleware() {
  yield takeLatest(SAVE_USER_REQUEST, saveUserHandler);
}

export function* saveUserHandler(action) {
  try {
    const resp = yield call(saveUserApi, action.payload);
    yield put(saveUserSuccess(resp));
  } catch (e) {
    yield put(saveUserFailed(e.message));
  }
}

export default function* userSaga() {
  yield all([fetchUserMiddleware(), saveUserMiddleware()]);
}
