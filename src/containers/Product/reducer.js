export const UPDATE_USER = "UPDATE_USER";
export const USER_SAVED = "USER_SAVED";
export const USER_SAVED_FAILED = "USER_SAVED_FAILED";
export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export const initialState = {
  user: null,
  isLoading: true,
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case UPDATE_USER:
    case USER_SAVED:
      return { user: action.payload, isLoading: false, error: "" };
    case USER_SAVED_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return { ...state };
  }
};
