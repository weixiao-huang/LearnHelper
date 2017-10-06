import { take, put } from 'redux-saga/effects';
import * as thulib from 'thulib';
import { SetLearnhelper } from '../../auth/actions';
import { ResetTo } from '../../router/actions';
import {
  LOGIN_REQUEST,
} from './types';

export default function* loginWatch() {
  while (true) {
    const { username, password } = yield take(LOGIN_REQUEST);
    const user = {
      username,
      getPassword: () => password,
    };
    const learnhelper = new thulib.LearnHelperUtil(user);
    const res = yield learnhelper.login();
    if (res.indexOf('window.alert("您没有登陆网络学堂的权限！");') === -1) {
      yield put(SetLearnhelper(learnhelper));
      yield put(ResetTo('homeTab'));
    }
  }
}
