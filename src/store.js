import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./containers/User/reducer";
import usersReducer from "./containers/Users/reducer";
import clientsReducer from './containers/Clients/reducer';
import sagas from "./middlewares";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    user: reducer,
    users: usersReducer,
    clients: clientsReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);
