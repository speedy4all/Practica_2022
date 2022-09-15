export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";

export const SAVE_USER_REQUEST = "SAVE_USER_REQUEST";
export const SAVE_USER_SUCCESS = "SAVE_USER_SUCCESS";
export const SAVE_USER_FAILED = "SAVE_USER_FAILED";


export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export const initialState = {
  user: null,
  isLoading: true,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
    case SAVE_USER_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_USER_SUCCESS:
    case SAVE_USER_SUCCESS:
      return { user: action.payload, isLoading: false, error: "" };
    case SAVE_USER_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return { ...state };
  }
};
