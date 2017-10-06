import { all, fork } from 'redux-saga/effects';
import LoginSagas from './pages/login/sagas';

export default function* IndexSaga() {
  yield all([
    fork(LoginSagas),
  ]);
}
