import { all } from 'redux-saga/effects';
import usersMiddleare from './containers/Users/middleware';
import userMiddleare from './containers/User/middleware';
// import clientsMiddleare from './containers/Clients/middleware';


// export default [...usersMiddleare, ...clientsMiddleare];

export function* rootSaga() {
    yield all([usersMiddleare(), userMiddleare()]);
}


export default rootSaga;