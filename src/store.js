import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./containers/User/reducer";
import usersReducer from "./containers/Users/reducer";
import clientsReducer from './containers/Clients/reducer';
import middleware from "./middlewares";

export default configureStore({
  reducer: {
    user: reducer,
    users: usersReducer,
    clients: clientsReducer
  },
  middleware
});
