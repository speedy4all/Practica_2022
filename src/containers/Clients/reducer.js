export const FETCH_CLIENTS_REQUEST = "FETCH_CLIENTS_REQUEST";
export const FETCH_CLIENTS_SUCCESS = "FETCH_CLIENTS_SUCCESS";
export const FETCH_CLIENTS_FAILED = "FETCH_CLIENTS_FAILED";

const initialState = {
  data: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      return { data: action.payload, error: "" };
    case FETCH_CLIENTS_FAILED:
      return { data: [], error: action.payload };
    default:
      return { ...state };
  }
};
