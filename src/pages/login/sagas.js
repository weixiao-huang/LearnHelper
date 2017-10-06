import { take } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
} from './types';

export default function* loginWatch() {
  while (true) {
    const { username, password } = yield take(LOGIN_REQUEST);
    console.log('username: ', username);
    console.log('password: ', password);
  }
}
