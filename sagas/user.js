import {
  all, fork, call, put, takeLatest,
} from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_FAILURE, LOG_IN_SUCCESS } from '../reducers/user';

function loginAPI() {
  // 서버에 요청을 보내는 부분
}

function* login() {
  try {
    yield call(loginAPI);
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
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchSignUp() {
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    // fork(watchHello),
  ]);
}
