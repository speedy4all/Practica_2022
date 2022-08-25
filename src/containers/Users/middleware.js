import { fetchUsersApi } from "../../api";
import { fetchUsersFailed, fetchUsersSuccess } from "./actions";
import { FETCH_USERS_REQUEST } from "./reducer";

const fetchUsersMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === FETCH_USERS_REQUEST) {
      fetchUsersApi()
        .then((resp) => {
          dispatch(fetchUsersSuccess(resp));
        })
        .catch((e) => {
          dispatch(fetchUsersFailed(e.message));
        });
    }
  };

  export default [fetchUsersMiddleware];
