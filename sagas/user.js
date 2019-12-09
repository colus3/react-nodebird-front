import axios from 'axios';

import {
  all, fork, call, put, takeLatest, takeEvery, delay
} from 'redux-saga/effects';
import {
  LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_IN_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from '../reducers/user';

function loginAPI() {
  // 서버에 요청을 보내는 부분
  return axios.post('/login');
}

function* login() {
  try {
    // yield call(loginAPI);
    yield delay(2000);
    yield put({ // / put 은 dispatch 와 동일
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

function signUpAPI() {
  // 서버에 요청을 보내느 부분
  return axios.post('/signup');
}

function* signUp() {
  try {
    // yield call(signUpAPI);
    yield delay(2000);
    throw new Error('에러');
    yield put({ // / put 은 dispatch 와 동일
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
  ]);
}
