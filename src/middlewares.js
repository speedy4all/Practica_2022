import { all } from 'redux-saga/effects';
import usersMiddleare from './containers/Users/middleware';
// import clientsMiddleare from './containers/Clients/middleware';


// export default [...usersMiddleare, ...clientsMiddleare];

export function* rootSaga() {
    yield all([usersMiddleare()]);
}


export default rootSaga;