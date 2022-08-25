export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const initialState = {
  data: [],
  isLoading: false,
  erorr: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_USERS_SUCCESS:
      return { data: action.payload, isLoading: false, error: "" };
    case FETCH_USERS_FAILED:
      return { data: [], isLoading: false, error: action.payload };
    default:
      return { ...state };
  }
};
