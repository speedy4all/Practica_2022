import { fetchUsersApi } from "../../api";
import { fetchUsersFailed, fetchUsersSuccess } from "./actions";
import { FETCH_USERS_REQUEST } from "./reducer";
import { all, call, put, takeLatest } from "redux-saga/effects";

export function* fetchUsersMiddleware() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersMiddlewareHandler);
}

export function* fetchUsersMiddlewareHandler(action) {
  try {
    const resp = yield call(fetchUsersApi, 2);
    yield put(fetchUsersSuccess(resp));
  } catch (e) {
    yield put(fetchUsersFailed(e.message));
  }
}

export function* usersSaga() {
  yield all([fetchUsersMiddleware()]);
}

export default usersSaga;
