import { fetchClientsApi } from "../../api";
import { FETCH_CLIENTS_REQUEST, FETCH_CLIENTS_SUCCESS } from "./reducer";

const fetchClientsMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === FETCH_CLIENTS_REQUEST) {
      fetchClientsApi().then((resp) => {
        const clients = resp.map((client) => {
          const names = client.name.split(" ");
          return { ...client, firstName: names[0], lastName: names[1] };
        });
        dispatch({ type: FETCH_CLIENTS_SUCCESS, payload: clients });
      });
    }
  };

export default [fetchClientsMiddleware];
